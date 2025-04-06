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
          <p><a href="/projetos/calculadora-de-campanhas" className="btn btn-outline-dark">Acessar projeto</a></p>
        </div>

        {/* Bloco - Cartas de Tarô */}
        <div className="col-lg bg-light rounded p-4">
          <h5 className="banner-text rounded p-3">Cartas de Tarô</h5>
          <p>Explore os significados simbólicos das cartas de Tarô com visualização interativa, sorteio aleatório e representação de cartas invertidas. Uma jornada de autoconhecimento com React e dados dinâmicos.</p>
          <p><a href="/projetos/cartas-de-tarot" className="btn btn-outline-dark">Explorar cartas</a></p>
        </div>

        {/* Bloco - Sobre Mim */}
        <div className="col-lg bg-light rounded p-4">
          <h5 className="banner-text rounded p-3">Sobre Mim</h5>
          <p>Mais do que demonstrar habilidades técnicas, este espaço é uma forma de compartilhar a jornada de quem está começando na área com dedicação e curiosidade.</p>
          <p><a href="/sobre" className="btn btn-outline-dark">Ver mais</a></p>
        </div>


      </div>
    </div>
</div>

  );
}

export default Home;
