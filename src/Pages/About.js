import LogoWhite from '../Img/logowhite.svg';
import Me from '../Img/me.jpg';
import LogoLinkedin from "../Img/linkedin.svg";
import LogoGit from "../Img/github.svg";

function About() {
  return (
    <div>
      <div className="container-lg bg-white rounded p-5 banner-home mt-4 mb-4">
        <h3 className="display-4 banner-text rounded p-3">Sobre</h3>
      </div>

      <div className="container-lg bg-black rounded text-white p-5">
        <div className="row gap-4 mt-4 text-center">
          <div className="col-lg-3 rounded p-3">
            <img src={Me} alt="Foto de perfil" className="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }} />
            <h2>Mateus Fardin</h2>
            <h6>Comunicação | Marketing | Planejamento Estratégico | Gestão de Projetos | Dev. Full Stack</h6>
            <a href="https://www.linkedin.com/in/mateusfardin/" target="_blank" rel="noopener noreferrer">
              <img src={LogoLinkedin} alt="Logo Linkedin" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://github.com/mateusdka" target="_blank" rel="noopener noreferrer">
              <img src={LogoGit} alt="Logo GitHub" style={{ width: '30px', height: '30px' }} />
            </a>

          </div>
          <div className="col-lg bg-dark rounded p-3 text-start">
            <p>Este site é um projeto em React que venho desenvolvendo enquanto avanço 
              nos estudos em Análise e Desenvolvimento de Sistemas Full-Stack, com foco em 
              soluções Mobile e Web. Ele nasce como um espaço de experimentação — um ambiente 
              onde posso testar, aprender e integrar, na prática, as camadas que conectam 
              tecnologia, design, estratégia e experiência.</p>

            <p>Minha trajetória começou na publicidade e no marketing, áreas onde atuei por 
              mais de 15 anos liderando projetos para grandes marcas da indústria nacional 
              e internacional. Com o tempo, fui direcionando minha atuação para o ponto onde 
              criatividade, dados e tecnologia se cruzam — não só por exigência do mercado, 
              mas porque esse encontro sempre fez sentido pra mim. A tecnologia deixou de 
              ser um meio e passou a ser parte da estratégia.</p>

            <p>Hoje, sigo expandindo esse repertório, tanto na liderança de times quanto 
              no desenvolvimento de soluções híbridas — entre comunicação, experiência e 
              sistemas. Este site vai sendo atualizado conforme o percurso avança. E ele vai 
              mudar bastante, porque ainda tem muita coisa pra acontecer.</p>

            <img src={LogoWhite} alt="Logo" className="img-fluid mt-4" style={{ width: '100px' }} />

          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
