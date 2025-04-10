import { useState, useEffect } from "react";

function Clima() {
    const [cidade, setCidade] = useState(""); // estado para armazenar a cidade enquanto o usuário digita.
    const [sugestoes, setSugestoes] = useState([]); // estado para armazenar a lista de cidades até que o usuário escolha uma.
    const [selecionada, setSelecionada] = useState(null); // estado para armazenar a cidade selecionada.
    const [previsao, setPrevisao] = useState(null); // estado para armazenar a previsão da cidade escolhida. 
    const weatherMap = { // para traduzir o código enviado pela API em uma informação mais clara sobre o clima.
        0: { desc: "Céu limpo", icon: "☀️", cardcap: "01" },
        1: { desc: "Principalmente claro", icon: "🌤️", cardcap: "01" },
        2: { desc: "Parcialmente nublado", icon: "⛅", cardcap: "02" },
        3: { desc: "Nublado", icon: "☁️", cardcap: "03" },
        45: { desc: "Neblina", icon: "🌫️", cardcap: "03" },
        48: { desc: "Neblina intensa", icon: "🌫️❄️", cardcap: "03" },
        51: { desc: "Garoa fraca", icon: "🌦️", cardcap: "04" },
        53: { desc: "Garoa moderada", icon: "🌦️", cardcap: "04" },
        55: { desc: "Garoa intensa", icon: "🌧️", cardcap: "04" },
        61: { desc: "Chuva fraca", icon: "🌧️", cardcap: "04" },
        63: { desc: "Chuva moderada", icon: "🌧️", cardcap: "04" },
        65: { desc: "Chuva forte", icon: "🌧️🌧️", cardcap: "04" },
        80: { desc: "Pancadas fracas", icon: "🌦️", cardcap: "04" },
        81: { desc: "Pancadas moderadas", icon: "🌧️", cardcap: "05" },
        82: { desc: "Pancadas fortes", icon: "🌧️🌧️", cardcap: "05" },
        95: { desc: "Tempestade Localizada", icon: "⛈️", cardcap: "05" },
        96: { desc: "Tempestade moderada", icon: "⛈️", cardcap: "05" },
        99: { desc: "Tempestade intensa", icon: "⛈️", cardcap: "05" }
    };

    //Colateral para realizar a busca na API do Open Meteo e extrair os necessários da cidade.
    useEffect(() => {
        const buscarSugestoes = async () => {
            if (cidade.length < 3) { // a partir da digitação de 3 letras, inicia-se a busca.
                setSugestoes([]);
                return;
            }

            try {
                const response = await fetch( // API para encontrar latitude e longidade da cidade digitada.
                    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
                        cidade
                    )}&count=5&language=pt&format=json&countryCode=BR`
                );
                const data = await response.json();
                setSugestoes(data.results || []); // grava o resultado se a cidade for encontrada.
            } catch (err) {
                console.error("Erro ao buscar sugestões:", err); // traz o erro, se o resultado não for encontrado.
                setSugestoes([]);
            }
        };

        const delay = setTimeout(buscarSugestoes, 300); // Delay para não sobrecarregar a API gratuita.
        return () => clearTimeout(delay);
    }, [cidade]);

    const selecionarCidade = async (cidadeSelecionada) => { 
        setSelecionada(cidadeSelecionada);
        setCidade(`${cidadeSelecionada.name} - ${cidadeSelecionada.admin1}`);
        setSugestoes([]);

        // Ao selecionar a cidade, captura latitude e longitude e utiliza uma segunda API para buscar a previsão do tempo.

        try {
            const { latitude, longitude } = cidadeSelecionada;
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,precipitation_probability_max,apparent_temperature_min,weather_code&timezone=America%2FSao_Paulo&forecast_days=3`;

            const res = await fetch(url);
            const data = await res.json();
            setPrevisao(data.daily || null); // Trata a resposta da API.
        } catch (err) {
            console.error("Erro ao buscar previsão:", err); // Exibe Erro, se necessário.
            setPrevisao(null);
        }
    };

    return (
        <div>
            <div className="container-lg bg-white rounded p-5 banner-home mt-4 mb-4">
                <h3 className="display-4 banner-text rounded p-3">Previsão do Tempo</h3>
            </div>

            <div className="container-lg bg-black rounded text-white p-5">
                <div className="mt-4 position-relative">
                    <h1>Escolha a cidade</h1>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="🔍 Digite o nome de uma cidade brasileira"
                        value={cidade}
                        onChange={(e) => {
                            setCidade(e.target.value);
                            setSelecionada(null);
                            setPrevisao(null);
                        }}
                    />

                    {/* Lista flutuante para exibir as respostas encontradas na API de Geocoding */}

                    {sugestoes.length > 0 && (
                        <ul className="list-group position-absolute w-100 shadow" style={{ zIndex: 1000 }}>
                            {sugestoes.map((sugestao, index) => (
                                <li
                                    key={index}
                                    className="list-group-item list-group-item-action"
                                    onClick={() => selecionarCidade(sugestao)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {sugestao.name} - {sugestao.admin1}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Apresenta a cidade escolhida */}

                {selecionada && (
                    <div className="mt-4">
                        <h1>Cidade Selecionada</h1>
                        <h4>{selecionada.name} - {selecionada.admin1}</h4>
                    </div>
                )}

                {/* Apresenta a previsão para a cidade escolhida */}

                {previsao && (
                    <div className="mt-4">
                        <h5 className="mb-3">Previsão para 3 dias</h5>
                        <div className="row">
                            {previsao.time.map((data, i) => {
                                const weather = weatherMap[previsao.weather_code[i]] || { desc: "Desconhecido", icon: "❓" };
                                return (
                                    <div className="col-md-4 mb-3" key={i}>
                                        <div className="card text-bg-dark">
                                            <img src={`/ImgClima/${weather.cardcap}.png`} className="card-img-top" alt={weather.desc} />
                                                <h6 className="card-title text-end p-3">
                                                    {(() => {
                                                        const [ano, mes, dia] = data.split("-");
                                                        return `${dia}/${mes}/${ano}`;
                                                    })()}
                                                </h6>
                                            <div className="card-body bg-dark text-white">
                                                <p className="mb-1">
                                                    <span style={{ fontSize: "1.5rem" }}>{weather.icon}</span> {weather.desc}
                                                </p>
                                                <p className="card-text">
                                                    Máx: {previsao.temperature_2m_max[i]}°C<br />
                                                    Mín: {previsao.temperature_2m_min[i]}°C<br />
                                                    Sens. Máx: {previsao.apparent_temperature_max[i]}°C<br />
                                                    Sens. Mín: {previsao.apparent_temperature_min[i]}°C<br />
                                                    Chance de chuva: {previsao.precipitation_probability_max[i]}%
                                                </p>
                                            </div>
                                            <div className="card-footer bg-dark"></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            <div className="container-lg bg-white rounde p-5">

                <div className="row gap-4">

                    <div className="col-lg bg-light rounded p-5">
                        <h5 className="display-6 banner-text rounded p-3">Sobre este projeto</h5>
                        <p>Este exercício de programação em <strong>React</strong> foi desenvolvido com o objetivo de consumir dados em tempo real a partir de <strong>APIs públicas e gratuitas</strong>. A funcionalidade de busca de cidades foi baseada na <a href="https://open-meteo.com/en/docs/geocoding-api" target="_blank" rel="noreferrer"><strong>Open-Meteo Geocoding API</strong></a>, que fornece coordenadas geográficas a partir do nome da cidade. Já a previsão do tempo foi obtida por meio da <a href="https://open-meteo.com/en/docs" target="_blank" rel="noreferrer"><strong>Open-Meteo Forecast API</strong></a>, que disponibiliza previsões climáticas sem necessidade de autenticação ou chave de API.</p>
                        <p>Além de reforçar conceitos como <strong>componentização</strong>, <strong>hooks</strong> e <strong>controle de estado</strong> em React, este projeto destaca a importância do uso responsável de serviços gratuitos, respeitando limites e boas práticas no consumo de dados online.</p>
                    </div>

                    <div className="col-lg bg-light rounded p-5">
                        <h5 className="display-6 banner-text rounded p-3">Por que a previsão?</h5>
                        <p>A previsão do tempo é uma ferramenta essencial para o planejamento de atividades humanas. Na <strong>agricultura</strong>, por exemplo, ela orienta decisões sobre irrigação, colheita e plantio. Em áreas urbanas, ajuda a evitar contratempos em deslocamentos, eventos ao ar livre e logística. Para profissionais como pescadores, engenheiros civis, organizadores de eventos e até mesmo na área da saúde pública, conhecer o clima pode ser determinante.</p>
                        <p>Com o avanço das <strong>tecnologias meteorológicas</strong> e o acesso facilitado a dados climáticos, é possível tomar decisões mais seguras e estratégicas no dia a dia. Essa aplicação demonstra como a tecnologia pode ser usada para tornar essas informações mais acessíveis e úteis para todos.</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Clima;
