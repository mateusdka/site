import { useState } from "react";
import { formataMoeda, formataValores } from "../../Functions/Formatador";
import Bloco from "../../Functions/Bloco";
import AddRemove from "../../Functions/AdicionarRemover";
import CalcIndicadores from "./CalcIndicadores";
import CalcDistribuicao from "./CalcDistribuicao";
import Modais from "../../Functions/Modais";

function Calculadora() {
  const [budget, setBudget] = useState(1000);
  const [publico, setPublico] = useState(80000);
  const [taxaCliques, setTaxaCliques] = useState(Number(0.008));
  const [taxaConversao, setTaxaConversao] = useState(Number(0.01));
  const [ticketMedio, setTicketMedio] = useState(Number(100.00));
  const [complemento, setComplemento] = useState(0);

  return (
    <div>

      <div className="container-lg bg-white rounded p-5 banner-home mt-4 mb-4">
        <h3 className="display-4 banner-text rounded p-3">Calculadora de Campanhas</h3>
      </div>

      <div className="container-lg bg-black rounded text-white p-5">

        <div className="row gap-4 mt-4 text-center">

          <div className="col-lg bg-dark rounded p-3">
            {Bloco("money", 48, "white", "Investimento Mensal", formataMoeda(budget), `${formataMoeda(budget * 12)} ao ano`,1,"#modalCalculo")}
            {AddRemove(() => setBudget(budget + 1000) & setPublico(publico + 80000), () => setBudget(budget - 1000) & setPublico(publico - 80000), "R$ 1.000,00", "white", budget <= 0 ? true : false)}
          </div>

          <div className="col-lg bg-dark rounded p-3">
            {Bloco("people", 48, "white", "Público Mensal", formataValores(publico), `${formataValores(publico * 12)} ao ano`)}
          </div>

          <div className="col-lg bg-dark rounded p-3">
            {Bloco("view", 48, "white", "Visualizações Mensais", formataValores(publico * 3), `${formataValores((publico * 3) * 12)} ao ano`)}
          </div>

        </div>

        <div className="row gap-4 mt-4 text-center">
          <div className="col-lg bg-dark rounded p-3">
            <ul className="list-group list-group-horizontal aign-items-center justify-content-center">
              <li className="list-group-item bg-dark text-white">
                <button className="btn btn-dark" onClick={() => setComplemento(0)}>
                  Indicadores de Performance
                </button>
              </li>
              <li className="list-group-item bg-dark text-white">
                <button className="btn btn-dark" onClick={() => setComplemento(1)}>
                  Distribuição de Investimento
                </button>              
              </li>
            </ul>
          </div>
        </div>

        { complemento === 0 ?
          <CalcIndicadores 
            budget={budget} 
            publico={publico} 
            taxaCliques={taxaCliques} 
            taxaConversao={taxaConversao} 
            ticketMedio={ticketMedio} 
            setTaxaCliques={setTaxaCliques}
            setTaxaConversao={setTaxaConversao}
            setTicketMedio={setTicketMedio} 
          /> : 
          <CalcDistribuicao 
            budget={budget}
          />
        }

      </div>

      <Modais />
    </div>
  );
}

export default Calculadora;
