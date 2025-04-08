import React, { useState, useEffect, useRef } from "react";
import Deck from "../../Components/cartas_de_tarot.json";

function Cartas() {
  const [ cartaDados, setCartaDados ] = useState(0) // estado para armazenar os dados da carta selecionada
  const [ caminho, setCaminho ] = useState(""); // estado para armazenar o caminho da imagem da carta
  const [ virada, setVirada ] = useState(0); // estado para controlar a virada da carta
  const cartaRef = useRef(null); // referência para o elemento da carta selecionada

  useEffect(() => {
    if (cartaDados) {
      setCaminho(`/ImgCartas/${cartaDados.arquivo}`);
    }
  }, [cartaDados]); // colateral para atualizar o caminho da imagem quando cartaDados mudar

  const handleChange = (e) => {
    const idSelecionado = parseInt(e.target.value);
    setCartaDados(Deck.find((carta) => carta.ID === idSelecionado));
    setTimeout(() => {
      cartaRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // delay leve para garantir que o DOM já renderizou
  };
  

  const sortearCarta = () => { // sorteio aleatório de carta
    const idAleatorio = Math.floor(Math.random() * 78); // 0 a 77 cartas no deck
    const viradaAleatoria = Math.floor(Math.random() * 2); // 0 para carta normal, 1 para invertida
    setVirada(viradaAleatoria); // atualiza o estado da virada
    const eventoSimulado = { target: { value: idAleatorio.toString() } }; // simula o evento de mudança
    handleChange(eventoSimulado); // chama a função de mudança com o id aleatório
  };
  
    
  return (
    <div>
      <div className="container-lg bg-white rounded p-5 banner-home mt-4 mb-4">
        <h3 className="display-4 banner-text rounded p-3">Cartas de Tarot</h3>
      </div>

      <div className="container-lg bg-black rounded text-white p-5">
        <div className="row gap-4">
          <div className="col-lg bg-dark rounded p-5">
            <h1>Selecione a ação</h1>
            <p>Mentalize a sua questão e clique em selecionar uma carta abaixo.</p>
            <button className="btn btn-outline-light mt-4" onClick={sortearCarta}>Selecionar Carta</button>
            { /* botão para sortear uma carta aleatória */ }
          </div>
          <div className="col-lg bg-dark rounded p-5">
            <h1>Significado de uma Carta</h1>
            <p>Para conhecer uma Carta e seus significados, selecione uma na lista abaixo.</p>
            <select className="form-select" aria-label="Selecione uma carta" onChange={handleChange}>
              <option value="">Selecione uma carta</option>
              {Deck.map((carta) => (
                <option key={carta.ID} value={carta.ID}>
                  {carta.nome}
                </option>
              ))} {/* mapeia as cartas do deck e cria opções no select */ }
            </select>
          </div>
        </div>
        <div className="row gap-4 mt-4" ref={cartaRef} id="carta-selecionada"> {/* referência para rolagem suave */ }
          <div className="col-lg bg-dark rounded p-5">
            <h1 className="mb-5">Carta Selecionada</h1>
            {cartaDados ? (
              <div className="row gap-4">
                <div className="col-lg-3 text-center">
                <img
                  src={caminho}
                  alt={cartaDados.nome}
                  className={`img-fluid ${virada === 1 ? "invertida" : ""}`}
                /> 
                </div>
                <div className="col-lg">
                  <h2>{cartaDados.nome} {virada === 1 ? "(Invertida)" : ""}</h2>
                  <p><strong>Tipo: </strong>{cartaDados.tipo}</p>
                    {virada === 1 ? 
                      <p><strong>Significado Invertido: </strong>{cartaDados.significado_invertido}</p> : 
                      <p><strong>Significado: </strong>{cartaDados.significado_normal}</p> 
                    } {/* exibe o significado normal ou invertido com base na virada */ }
                    <p><strong>Descrição: </strong> { cartaDados.descricao }</p>
                </div>
              </div>
            ) : (
              <p>Nenhuma carta selecionada.</p>
            )} {/* exibe a carta selecionada ou mensagem de nenhuma carta */ }
          </div>
        </div>
      </div>

      <div className="container-lg bg-white rounde p-5">

        <div className="row gap-4">

          <div className="col-lg bg-light rounded p-5">

            <h5 className="display-6 banner-text rounded p-3">Sobre este projeto</h5>

            <p>Este projeto das Cartas de Tarot foi desenvolvido como uma forma de praticar e consolidar meus conhecimentos em <strong>React</strong>, com ênfase no uso de diversos <strong>hooks</strong> (<strong>useState</strong>, <strong>useEffect</strong>, <strong>useRef</strong>) para controle de estado, efeitos colaterais e manipulação do DOM. Utilizei também <strong>Bootstrap</strong> para o layout responsivo e estilização, além de <strong>react-router-dom</strong> para a navegação entre páginas.</p>
            <p>Os dados exibidos — nomes, significados e descrições das cartas — são carregados a partir de um arquivo <strong>JSON</strong>, originalmente gerado a partir de uma <strong>API REST externa</strong>. Esse conteúdo foi traduzido automaticamente e adaptado. Como a API original foi descontinuada, optei por incluir o JSON diretamente nos arquivos do projeto, garantindo que os dados permaneçam acessíveis e funcionais.</p>
            <p>Neste projeto, o objetivo foi a atenção à <strong>experiência do usuário</strong>, com interações dinâmicas como o sorteio aleatório de cartas, visualização de cartas invertidas e rolagem suave para os resultados. Trata-se de um exercício de <strong>lógica, interatividade e interface</strong>.</p>
          
          </div>

          <div className="col-lg bg-light rounded p-5">

            <h5 className="display-6 banner-text rounded p-3">Sobre o Tarot</h5>
            <p>O Tarot é uma prática antiga que combina arte, simbolismo e espiritualidade. Ele é frequentemente utilizado como uma ferramenta de autoconhecimento e orientação, permitindo que os indivíduos explorem suas emoções, desafios e potenciais futuros.</p>
            <p>As cartas de Tarot são ricas em simbolismo, e cada uma delas possui significados únicos que podem variar dependendo do contexto da leitura. O Tarot pode ser utilizado para responder perguntas específicas, refletir sobre situações da vida ou simplesmente como um meio de meditação e introspecção.</p>
            <p>A seleção das cartas ocorre por meio de um processo pseudoaleatório — ou seja, uma simulação de aleatoriedade gerada por algoritmos computacionais. Embora não exista aleatoriedade "real" na computação, esse recurso permite criar uma experiência similar ao sorteio físico de uma carta, adicionando um elemento de surpresa e reflexão ao processo de descoberta.</p>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Cartas;
