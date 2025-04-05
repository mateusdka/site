import { useState } from "react";
import LogoMeta from "../Img/meta.svg";
import LogoGoogle from "../Img/googleads.svg";
import LogoLinkedin from "../Img/linkedin.svg";
import Icon from "../Functions/Icons";
import { formataMoeda, formataPercent, formataValores } from "../Functions/Formatador";
import Modais from "../Functions/Modais";
import { EstrategiaComunicacao } from "../Functions/Calculos";

function CalculaAds() {
  const [budget, setBudget] = useState(1000);
  const [publico, setPublico] = useState(80000);
  const [estrategia, setEstrategia] = useState(0);
  const [empresa, setEmpresa] = useState(0);
  const [taxaCliques, setTaxaCliques] = useState(Number(0.008));
  const [taxaConversao, setTaxaConversao] = useState(Number(0.01));
  const [ticketMedio, setTicketMedio] = useState(Number(100.00));
  const calculo = EstrategiaComunicacao(budget, estrategia, empresa)

  return (
    <div className="container-lg bg-white rounded p-5 mb-4">
      <h1 className="mb-4">Calculadora de Campanhas Digitais</h1>

      <div className="card-group mb-4">
        <div className="card">
          <div className="card-header">Investimento Estimado</div>
          <div className="card-body">
            <div className="row">
              <div className="col"><Icon name="money" size={48} color="lightgray" /></div>
            </div>
            <h4 className="tarja-preta">{formataMoeda(budget)}</h4>
            <p><strong>Budget mensal.</strong><br />
              ({formataMoeda(budget * 12)} ao ano)</p>
          </div>
          <div className="card-footer bg-white">
            <p className="text-center">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => (setBudget(budget - 1000), setPublico(publico - 80000))}
                disabled={budget <= 0}>
                <Icon name="remove" size={18} color="red" />
              </button>

              <span className="m-2">R$ 1.000,00</span>

              <button
                type="button"
                class="btn btn-light"
                onClick={() => (setBudget(budget + 1000), setPublico(publico + 80000))}>
                <Icon name="add" size={18} color="green" />
              </button>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Objetivos de Campanha</div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <Icon name="filter" size={48} color="lightgray" />
              </div>
              <div className="col text-end">
                <button
                  type="button"
                  className="btn btn-light r-100"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEstrategia">
                  <Icon name="help" size={18} color="gray" />
                </button>
              </div>
            </div>
            <h4 className="tarja-preta">{estrategia === 0 ? "Lançamento" : "Vendas"}</h4>
            <p>
              <strong>Awareness</strong> ({calculo.awFaseP}): {calculo.awFase}<br />
              <strong>Consideração</strong> ({calculo.cnFaseP}): {calculo.cnFase}<br />
              <strong>Decisão</strong> ({calculo.dcFaseP}): {calculo.dcFase}<br />
            </p>
            <div className="progress-stacked">
              <div className="progress" role="progressbar" aria-label="Awarenness" aria-valuenow={calculo.awFaseBar} aria-valuemin="0" aria-valuemax="100" style={{ width: calculo.awFaseBar + "%" }}>
                <div className="progress-bar bg-pb-one">{calculo.awFaseP}</div>
              </div>
              <div className="progress" role="progressbar" aria-label="Consideracão" aria-valuenow={calculo.cnFaseBar} aria-valuemin="0" aria-valuemax="100" style={{ width: calculo.cnFaseBar + "%" }}>
                <div className="progress-bar bg-pb-two">{calculo.cnFaseP}</div>
              </div>
              <div className="progress" role="progressbar" aria-label="Decisão" aria-valuenow={calculo.dcFaseBar} aria-valuemin="0" aria-valuemax="100" style={{ width: calculo.dcFaseBar + "%" }}>
                <div className="progress-bar bg-pb-three">{calculo.dcFaseP}</div>
              </div>
            </div>
          </div>
          <div className="card-footer bg-white">
            <p className="text-center">
              <button
                type="button"
                class="btn btn-outline-dark"
                onClick={estrategia === 0 ? () => setEstrategia(1) : () => setEstrategia(0)} >
                {estrategia === 0 ? "Trocar para Vendas" : "Trocar para Lançamento"}
              </button>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Tipo de Negócio</div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <Icon name="target" size={48} color="lightgray" />
              </div>
              <div className="col text-end">
                <button
                  type="button"
                  className="btn btn-light r-100"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEmpresa">
                  <Icon name="help" size={18} color="gray" />
                </button>
              </div>
            </div>
            <h4 className="tarja-preta">{empresa === 0 ? "B2B ou Nicho" : "Varejo ou E-commerce"}</h4>
            <p><strong>Meta Ads</strong> ({calculo.invMetaP}): {calculo.invMeta} <br />
              <strong>Google Ads</strong> ({calculo.invGoogleP}): {calculo.invGoogle} <br />
              <strong>LinkedIn Ads</strong> ({calculo.invLinkedinP}): {calculo.invLinkedin}
            </p>
            <div className="progress-stacked">
              <div className="progress" role="progressbar" aria-label="MetaAds" aria-valuenow={calculo.invMetaBar} aria-valuemin="0" aria-valuemax="100" style={{ width: calculo.invMetaBar + "%" }}>
                <div className="progress-bar bg-pb-one">{calculo.invMetaP}</div>
              </div>
              <div className="progress" role="progressbar" aria-label="GoogleAds" aria-valuenow={calculo.invGoogleBar} aria-valuemin="0" aria-valuemax="100" style={{ width: calculo.invGoogleBar + "%" }}>
                <div className="progress-bar bg-pb-two">{calculo.invGoogleP}</div>
              </div>
              <div className="progress" role="progressbar" aria-label="LinkedinAds" aria-valuenow={calculo.invLinkedinBar} aria-valuemin="0" aria-valuemax="100" style={{ width: calculo.invLinkedinBar + "%" }}>
                <div className="progress-bar bg-pb-three">{calculo.invLinkedinP}</div>
              </div>
            </div>
          </div>
          <div className="card-footer bg-white">
            <p className="text-center">
              <button
                type="button"
                class="btn btn-outline-dark"
                onClick={empresa === 0 ? () => setEmpresa(1) : () => setEmpresa(0)} >
                {empresa === 0 ? "Trocar para Varejo" : "Trocar para B2B ou Nicho"}
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="card-group mb-4">

        {/* Público e Impactos */}
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Impactos Estimados</p>
              <button
                type="button"
                className="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#modalCalculo">
                <Icon name="help" size={18} color="gray" />
              </button>
            </div>
          </div>
          <div className="card-body text-center">
            <div className="mb-4">
              <Icon name="people" size={20} color="gray" /><br />
              <h4 className="tarja-preta">{formataValores(publico)}</h4>
              <p><strong>Pessoas por mês</strong> <br />
                ({formataValores(publico * 12)} por ano).</p>
            </div><hr />
            <div className="mb-4">
              <Icon name="view" size={20} color="gray" /><br />
              <h4 className="tarja-preta">{formataValores(publico * 3)}</h4>
              <p><strong>Visualizações por mês</strong> <br />
                ({formataValores((publico * 3) * 12)} no ano).</p>
            </div><hr />
            <div className="mb-4">
              <Icon name="money" size={20} color="gray" /><br />
              <h4 className="tarja-preta">{formataMoeda((budget / (publico * 3)), 5)}</h4>
              <p><strong>Custo por Mil (CPM)</strong> <br />
                (Visualizações e impressões).</p>
            </div>
          </div>
        </div>

        {/* Cliques */}
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Cliques Estimados</p>
              <button
                type="button"
                className="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#modalCtr">
                <Icon name="help" size={18} color="gray" />
              </button>
            </div>
          </div>
          <div className="card-body text-center">
            <div className="mb-4">
              <Icon name="percent" size={20} color="gray" /><br />
              <h4 className="tarja-preta">{formataPercent(taxaCliques)}</h4>
              <p><strong>Taxa de Cliques (CTR)</strong><br />
                (sobre Visualizações).</p>
            </div><hr />
            <div className="mb-4">
              <Icon name="click" size={20} color="gray" /><br />
              <h4 className="tarja-preta">{formataValores((publico * 3) * taxaCliques)}</h4>
              <p><strong>Cliques por mês</strong> <br />
                ({formataValores(((publico * 3) * taxaCliques) * 12)} no ano).</p>
            </div><hr />
            <div className="mb-4">
              <Icon name="money" size={20} color="gray" /><br />
              <h4 className="tarja-preta">{formataMoeda(budget / ((publico * 3) * taxaCliques))}</h4>
              <p><strong>Custo por Cliques (CPC).</strong> <br /></p>
            </div>
          </div>
        </div>

        {/* Conversão */}
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Conversões Estimadas</p>
              <button
                type="button"
                className="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#modalConversao">
                <Icon name="help" size={18} color="gray" />
              </button>
            </div>
          </div>
          <div className="card-body text-center">
            <div className="mb-4">
              <Icon name="percent" size={20} color="gray" /><br />
              <h4 className="tarja-preta">{formataPercent(taxaConversao)}</h4>
              <p><strong>Taxa de Conversão</strong><br />
                (sobre os Cliques).</p>
            </div><hr />
            <div className="mb-4">
              <Icon name="conversion" size={20} color="gray" /><br />
              <h4 className="tarja-preta">{formataValores(((publico * 3) * taxaCliques) * taxaConversao)}</h4>
              <p><strong>Conversões por mês</strong> <br />
                ({formataValores((((publico * 3) * taxaCliques) * taxaConversao) * 12)} no ano).</p>
            </div><hr />
            <div className="mb-4">
              <Icon name="money" size={20} color="gray" /><br />
              <h4 className="tarja-preta">{formataMoeda(budget / (((publico * 3) * taxaCliques) * taxaConversao))}</h4>
              <p><strong>Custo por Aquisição (CPA)</strong> <br />
                (Contato, lead, venda, etc.).</p>
            </div>
          </div>
        </div>

        {/* ROAS */}
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Retorno Estimado</p>
              <button
                type="button"
                className="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#modalTicketMedio">
                <Icon name="help" size={18} color="gray" />
              </button>
            </div>
          </div>
          <div className="card-body text-center">
            <div className="mb-4">
              <Icon name="bag" size={20} color="gray" /><br />
              <h4 className="tarja-preta">{formataMoeda(ticketMedio)}</h4>
              <p><strong>Ticket Médio</strong><br />
                (Estimado).</p>
            </div><hr />
            <div className="mb-4">
              <Icon name="money" size={20} color="gray" /><br />
              <h4 className="tarja-preta">{formataMoeda((((publico * 3) * taxaCliques) * taxaConversao) * ticketMedio)}</h4>
              <p><strong>Em vendas por mês</strong> <br />
                ({formataMoeda(((((publico * 3) * taxaCliques) * taxaConversao) * 12) * ticketMedio)} no ano).</p>
            </div><hr />
            <div className="mb-4">
              <Icon name="percent" size={20} color="gray" /><br />
              <h4 className="tarja-preta">{formataPercent(((((publico * 3) * taxaCliques) * taxaConversao) * ticketMedio) / budget)}</h4>
              <p><strong>Retorno Sobre o Invetimento</strong> <br />
                (em publicidade - ROAS).</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body w-50-lg m-auto-lg">

          <table className="table">
            <thead>
              <tr>
                <th className="bg-dark text-white" scope="col"><Icon name="awareness" size={20} color="white" /></th>
                <th className="bg-dark text-white" scope="col">Total Awareness</th>
                <th className="bg-dark text-white" scope="col"></th>
                <th className="bg-dark text-white" scope="col">{calculo.awFase} ({calculo.awFaseP})</th>
              </tr>
              <tr>
                <th scope="col"></th>
                <th scope="col">Formato</th>
                <th scope="col">Segmentação</th>
                <th scope="col">Investimento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bg-light" scope="col"><img src={ LogoMeta } width={20} height={20} /></th>
                <th className="bg-light" scope="col">Meta Ads Total</th>
                <th className="bg-light" scope="col"></th>
                <th className="bg-light" scope="col">{calculo.awMeta} ({calculo.awMetaP})</th>
              </tr>
              <tr>
                <th scope="col"><img src={ LogoMeta } width={20} height={20} /></th>
                <td><Icon name="post" size={20} color="black" /> Dark Post</td>
                <td><Icon name="profile" size={20} color="black" /> Perfil do Público</td>
                <td>{formataMoeda(calculo.investFinal[0][0])} ({formataPercent(calculo.distrFinal[0][0])})</td>
              </tr>
              <tr>
              <th scope="col"><img src={ LogoMeta } width={20} height={20} /></th>
                <td><Icon name="video" size={20} color="black" /> Dark Post (Vídeo)</td>
                <td><Icon name="profile" size={20} color="black" /> Perfil do Público</td>
                <td>{formataMoeda(calculo.investFinal[0][1])} ({formataPercent(calculo.distrFinal[0][1])})</td>
              </tr>
              <tr>
              <th scope="col"><img src={ LogoMeta } width={20} height={20} /></th>
                <td><Icon name="profile" size={20} color="black" /> Dark Post</td>
                <td><Icon name="lookalike" size={20} color="black" /> Look Alike</td>
                <td>{formataMoeda(calculo.investFinal[0][2])} ({formataPercent(calculo.distrFinal[0][2])})</td>
              </tr>

              <tr>
                <th className="bg-light" scope="col"><img src={ LogoGoogle } width={20} height={20} /></th>
                <th className="bg-light" scope="col">Google Ads Total</th>
                <th className="bg-light" scope="col"></th>
                <th className="bg-light" scope="col">{calculo.awGoogle} ({calculo.awGoogleP})</th>
              </tr>
              <tr>
                <th scope="col"><img src={ LogoGoogle } width={20} height={20} /></th>
                <td><Icon name="search" size={20} color="black" /> Search (Buscas)</td>
                <td><Icon name="keyword" size={20} color="black" /> Palavras-chave</td>
                <td>{formataMoeda(calculo.investFinal[0][3])} ({formataPercent(calculo.distrFinal[0][3])})</td>
              </tr>
              <tr>
              <th scope="col"><img src={ LogoGoogle } width={20} height={20} /></th>
                <td><Icon name="display" size={20} color="black" /> Display</td>
                <td><Icon name="profile" size={20} color="black" /> Perfil do Público</td>
                <td>{formataMoeda(calculo.investFinal[0][4])} ({formataPercent(calculo.distrFinal[0][4])})</td>
              </tr>
              <tr>
              <th scope="col"><img src={ LogoGoogle } width={20} height={20} /></th>
                <td><Icon name="display" size={20} color="black" /> Display</td>
                <td><Icon name="lookalike" size={20} color="black" /> Listas</td>
                <td>{formataMoeda(calculo.investFinal[0][5])} ({formataPercent(calculo.distrFinal[0][5])})</td>
              </tr>

              <tr>
                <th className="bg-light" scope="col"><img src={ LogoLinkedin } width={20} height={20} /></th>
                <th className="bg-light" scope="col">Linkedin Ads Total</th>
                <th className="bg-light" scope="col"></th>
                <th className="bg-light" scope="col">{calculo.awLinkedin} ({calculo.awLinkedinP})</th>
              </tr>
              <tr>
                <th scope="col"><img src={ LogoLinkedin } width={20} height={20} /></th>
                <td><Icon name="post" size={20} color="black" /> Post</td>
                <td><Icon name="profile" size={20} color="black" /> Perfil do Público</td>
                <td>{formataMoeda(calculo.investFinal[0][6])} ({formataPercent(calculo.distrFinal[0][6])})</td>
              </tr>
            
            </tbody>
          </table>

          { console.log(
            "LKD AW: " + calculo.awLinkedin, 
            " - LKD CON: " + calculo.cnLinkedin, 
            " - LKD DEC: " + calculo.dcLinkedin, 
            " - LKD AW 1: "+ calculo.investFinal[0][6],
            " - LKD CN 1: "+ calculo.investFinal[1][3],
            " - LKD DC 1: "+ calculo.investFinal[2][4],
            ) }

        </div>
      </div>


      {/* Modais */}

      <Modais
        taxaCliques={taxaCliques}
        setTaxaCliques={setTaxaCliques}
        taxaConversao={taxaConversao}
        setTaxaConversao={setTaxaConversao}
        ticketMedio={ticketMedio}
        setTicketMedio={setTicketMedio}
      />

    </div>
  );
}

export default CalculaAds;
