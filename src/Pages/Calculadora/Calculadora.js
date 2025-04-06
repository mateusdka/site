import { useState } from "react";
import { formataMoeda, formataValores } from "../../Functions/Formatador";
import Bloco from "../../Functions/Bloco";
import AddRemove from "../../Functions/AdicionarRemover";
import CalcIndicadores from "./CalcIndicadores";
import CalcDistribuicao from "./CalcDistribuicao";
import Modais from "../../Functions/Modais";

function Calculadora() {
  const [budget, setBudget] = useState(1000); // valor inicial do orçamento
  const [publico, setPublico] = useState(80000); // valor inicial do público
  const [taxaCliques, setTaxaCliques] = useState(Number(0.008)); // taxa de cliques inicial
  const [taxaConversao, setTaxaConversao] = useState(Number(0.01)); // taxa de conversão inicial
  const [ticketMedio, setTicketMedio] = useState(Number(100.00)); // ticket médio inicial
  const [complemento, setComplemento] = useState(0); // 0 = Indicadores, 1 = Distribuição

  return (
    <div>

      <div className="container-lg bg-white rounded p-5 banner-home mt-4 mb-4">
        <h3 className="display-4 banner-text rounded p-3">Calculadora de Campanhas</h3>
      </div>

      <div className="container-lg bg-black rounded text-white p-5">

        <div className="row gap-4 mt-4 text-center">

          <div className="col-lg bg-dark rounded p-3">
            {/* Bloco de Orçamento Mensal */}
            {Bloco("money", 48, "white", "Investimento Mensal", formataMoeda(budget), `${formataMoeda(budget * 12)} ao ano`,1,"#modalCalculo")}
            {/* Botões de Adicionar/Remover Orçamento */}
            {AddRemove(() => setBudget(budget + 1000) & setPublico(publico + 80000), () => setBudget(budget - 1000) & setPublico(publico - 80000), "R$ 1.000,00", "white", budget <= 0 ? true : false)}
          </div>

          <div className="col-lg bg-dark rounded p-3">
            {/* Bloco de Público Mensal */}
            {Bloco("people", 48, "white", "Público Mensal", formataValores(publico), `${formataValores(publico * 12)} ao ano`)}
          </div>

          <div className="col-lg bg-dark rounded p-3">
            {/* Bloco de Cliques Mensais */}
            {Bloco("view", 48, "white", "Visualizações Mensais", formataValores(publico * 3), `${formataValores((publico * 3) * 12)} ao ano`)}
          </div>

        </div>

        <div className="row gap-4 mt-4 text-center">
          <div className="col-lg bg-dark rounded p-3">
            <ul className="list-group list-group-horizontal aign-items-center justify-content-center">
              <li className="list-group-item bg-dark text-white">
                <button className="btn btn-dark" onClick={() => setComplemento(0)}>
                  Indicadores de Performance
                </button> {/* Botão para calcular indicadores */}
              </li>
              <li className="list-group-item bg-dark text-white">
                <button className="btn btn-dark" onClick={() => setComplemento(1)}>
                  Distribuição de Investimento
                </button> {/* Botão para calcular distribuição */}              
              </li>
            </ul>
          </div>
        </div>

        { complemento === 0 ?
          <CalcIndicadores // Componente para calcular indicadores
            budget={budget} 
            publico={publico} 
            taxaCliques={taxaCliques} 
            taxaConversao={taxaConversao} 
            ticketMedio={ticketMedio} 
            setTaxaCliques={setTaxaCliques}
            setTaxaConversao={setTaxaConversao}
            setTicketMedio={setTicketMedio} 
          /> : 
          <CalcDistribuicao // Componente para calcular distribuição
            budget={budget}
          />
        }

      </div>
      <Modais /> {/* Componente para modais */}

      <div className="container-lg bg-white rounde p-5">

        <div className="row gap-4">

          <div className="col-lg bg-light rounded p-5">

            <h5 className="display-6 banner-text rounded p-3">Sobre este projeto</h5>

            <p>Este projeto foi desenvolvido como uma forma de praticar e consolidar meus 
              conhecimentos em <strong>React</strong>, com ênfase no uso de diversos <strong>hooks</strong> 
              (<strong>useState</strong>, <strong>useEffect</strong>) para gerenciamento de estado e efeitos 
              colaterais. Utilizei <strong>Bootstrap</strong> para estilização responsiva e <strong>react-router-dom</strong> 
              para navegação entre diferentes seções do sistema.</p>

            <p>Além da interface interativa, o projeto também inclui uma lógica personalizada de cálculos 
              para estimar <strong>indicadores de performance digital</strong> e <strong>distribuição de 
                investimentos</strong> por canais e fases do funil de marketing. Toda a lógica de cálculo 
                foi implementada manualmente em JavaScript, sem uso de bibliotecas externas específicas 
                para isso, com base em benchmarks reais do mercado.</p>

            <p>Esse projeto buscou integrar <strong>lógica de negócios</strong> com uma <strong>interface 
              clara e responsiva</strong>, permitindo simulações e ajustes dinâmicos de variáveis para 
              tomada de decisão em estratégias de mídia paga.</p>

          </div>

          <div className="col-lg bg-light rounded p-5">

            <h5 className="display-6 banner-text rounded p-3">Contexto da Calculadora</h5>

            <p>A Calculadora de Campanhas Digitais foi idealizada para auxiliar profissionais de 
              marketing a estimar o retorno e a distribuição ideal de seus investimentos mensais, 
              com base em variáveis como <strong>público estimado, taxa de cliques (CTR), taxa de 
                conversão</strong> e <strong>ticket médio</strong>.</p>

            <p>Ela simula cenários com foco em performance (ROAS) e distribuição estratégica por 
              canais — como Meta, Google e LinkedIn — além de fases do funil (Awareness, Consideração 
              e Decisão). A ferramenta se adapta a diferentes tipos de negócio, como <strong>B2B</strong> 
              e <strong>varejo</strong>, oferecendo uma visão clara e objetiva do potencial de retorno.</p>
              
          </div>
        </div>
      </div>

    </div>
  );
}

export default Calculadora;
