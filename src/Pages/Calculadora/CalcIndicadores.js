import Bloco from "../../Functions/Bloco";
import { formataMoeda, formataPercent, formataValores } from "../../Functions/Formatador";
import AddRemove from "../../Functions/AdicionarRemover";

function CalcIndicadores({
    budget, 
    publico, 
    taxaCliques, 
    taxaConversao, 
    ticketMedio, 
    setTaxaCliques, 
    setTaxaConversao, 
    setTicketMedio}) {

    return (
        <div>
            <div className="row gap-4 mt-4 text-center">

                <div className="col-lg bg-dark rounded p-3">
                    {/* Bloco de Orçamento Mensal */}
                    {Bloco("money", 48, "white", "Custo por Mil (CPM)", budget === 0 ? formataMoeda(0) : formataMoeda(budget / (publico * 3), 4), "por 1.000 visualizações")}
                </div>

                <div className="col-lg bg-dark rounded p-3">
                    {/* Bloco de Público Mensal */}
                    {Bloco("percent", 48, "white", "Taxa de Cliques (CTR)", formataPercent(taxaCliques),"",1,"#modalCtr")}
                    {/* Botões de Adicionar/Remover Taxa de Cliques */}
                    {AddRemove(() => setTaxaCliques(taxaCliques + 0.0010), () => setTaxaCliques(taxaCliques - 0.0010), "0,10%", "white", taxaCliques <= 0.000 ? true : false)}
                </div>

                <div className="col-lg bg-dark rounded p-3">
                    {/* Bloco de Cliques Mensais */}
                    {Bloco("click", 48, "white", "Cliques Mensais", formataValores((publico * 3) * taxaCliques), formataValores(((publico * 3) * 12) * taxaCliques) + " cliques no ano")}
                </div>

                <div className="col-lg bg-dark rounded p-3">
                    {/* Bloco de Custo por Clique */}
                    {Bloco("percent", 48, "white", "Custo por Cliques (CPC)", budget === 0 ? formataMoeda(0) : formataMoeda(budget / ((publico * 3) * taxaCliques)), "por clique")}
                </div>

            </div>

            <div className="row gap-4 mt-4 text-center">

                <div className="col-lg bg-dark rounded p-3">
                    {/* Bloco de Conversões Mensais */}
                    {Bloco("percent", 48, "white", "Taxa de Conversão", formataPercent(taxaConversao),"",1,"#modalConversao")}
                    {/* Botões de Adicionar/Remover Taxa de Conversão */}
                    {AddRemove(() => setTaxaConversao(taxaConversao + 0.0010), () => setTaxaConversao(taxaConversao - 0.0010), "0,10%", "white", taxaConversao <= 0.000 ? true : false)}
                </div>

                <div className="col-lg bg-dark rounded p-3">
                    {/* Bloco de Conversões Mensais */}
                    {Bloco("conversion", 48, "white", "Conversões Mensais", formataValores(((publico * 3) * taxaCliques) * taxaConversao), formataValores((((publico * 3) * 12) * taxaCliques) * taxaConversao) + " conversões no ano")}
                </div>

                <div className="col-lg bg-dark rounded p-3">
                    {/* Bloco de Ticket Médio */}
                    {Bloco("bag", 48, "white", "Ticket Médio", formataMoeda(ticketMedio),"",1,"#modalTicketMedio")}
                    {/* Botões de Adicionar/Remover Ticket Médio */}
                    {AddRemove(() => setTicketMedio(ticketMedio + 50), () => setTicketMedio(ticketMedio - 50), "R$ 50,00", "white", ticketMedio <= 0 ? true : false)}
                </div>

                <div className="col-lg bg-dark rounded p-3">
                    {/* Bloco de Faturamento Mensal */}
                    {Bloco("money", 48, "white", "Faturamento Mensal", taxaConversao === 0 || ticketMedio === 0 || budget === 0 ? formataMoeda(0) : formataMoeda((((publico * 3) * taxaCliques) * taxaConversao) * ticketMedio), formataMoeda(((((publico * 3) * taxaCliques) * taxaConversao) * ticketMedio) * 12) + " no ano")}
                </div>

            </div>

            <div className="row gap-4 mt-4 text-center">

                <div className="col-lg bg-dark rounded p-3">
                    {/* Bloco de Custo por Conversão */}
                    {Bloco("percent", 48, "white", "Retorno do Investimento (ROAS)", taxaConversao === 0 || ticketMedio === 0 || budget === 0 ? formataPercent(0) : formataPercent(((((publico * 3) * taxaCliques) * taxaConversao) * ticketMedio) / budget), "sobre o valor investido")}
                </div>

            </div>
        </div>

    );
}

export default CalcIndicadores;