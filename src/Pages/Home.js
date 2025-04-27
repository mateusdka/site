import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container-lg bg-white rounded p-5 banner-home mt-4 mb-4">
        <h1 className="display-1 banner-text rounded p-3">Projetos</h1>
      </div>

      <div className="container-lg bg-white rounded p-5 mt-5">
        <div className="row gap-4 text-center">

        {/* Bloco - Calculadora de Campanhas */}
        <div className="col-lg bg-light rounded p-4">
          <h5 className="banner-text rounded p-3">Calculadora de Campanhas</h5>
          <p>Simule de forma rápida e intuitiva a distribuição de investimento em campanhas digitais. Descubra como alcançar o público certo e gerar resultados com base em indicadores reais do marketing digital.</p>
          <Link to="/projetos/calculadora-de-campanhas" className="btn btn-outline-dark">Acessar Calculadora</Link>
        </div>

        {/* Bloco - Cartas de Tarô */}
        <div className="col-lg bg-light rounded p-4">
          <h5 className="banner-text rounded p-3">Cartas de Tarô</h5>
          <p>Explore os significados simbólicos das cartas de Tarô com visualização interativa, sorteio aleatório e representação de cartas invertidas. Uma jornada de autoconhecimento com React e dados dinâmicos.</p>
          <Link to="/projetos/cartas-de-tarot" className="btn btn-outline-dark">Explorar Cartas</Link>
        </div>

        {/* Bloco - Previsão do Tempo */}
        <div className="col-lg bg-light rounded p-4">
          <h5 className="banner-text rounded p-3">Previsão do Tempo</h5>
          <p>Consulte a previsão meteorológica da sua cidade com dados atualizados de temperatura, clima e precipitação, apresentados em uma interface amigável e responsiva.</p>
          <Link to="/projetos/clima" className="btn btn-outline-dark">Ver Previsão</Link>
        </div>

        {/* Bloco - Preços Agropecuários */}
        <div className="col-lg bg-light rounded p-4">
          <h5 className="banner-text rounded p-3">Preços Agropecuários</h5>
          <p>Acompanhe a evolução dos preços médios de produtos agropecuários com gráficos interativos e exportação de dados. Ideal para análises de mercado e estudos de correlação.</p>
          <Link to="/projetos/precos" className="btn btn-outline-dark">Visualizar Preços</Link>
        </div>

        {/* Bloco - Sobre Mim */}
        <div className="col-lg bg-light rounded p-4">
          <h5 className="banner-text rounded p-3">Sobre Mim</h5>
          <p>Mais do que demonstrar habilidades técnicas, este espaço é uma forma de compartilhar a jornada de quem está começando na área com dedicação e curiosidade.</p>
          <Link to="/sobre" className="btn btn-outline-dark">Saiba Mais</Link>          
        </div>


      </div>
    </div>
</div>

  );
}

export default Home;
