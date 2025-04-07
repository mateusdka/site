// Este módulo contém um componente React chamado "Modais" que exibe informações adicionais em modais (janelas pop-up) quando o usuário clica em botões de ajuda.
// O componente utiliza a biblioteca Bootstrap para estilização e funcionalidade dos modais.
// Ele contém cinco modais diferentes, cada um com informações específicas sobre o cálculo, estratégias de marketing, tipo de empresa, taxa de cliques (CTR), taxa de conversão e ticket médio.
function Modais() {
    return (
        <div>

            {/* Modal sobre o Cálculo */}
            <div class="modal fade" id="modalCalculo" tabindex="-1" aria-labelledby="modalCalculo" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="modalCalculo">Sobre o Cálculo</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Para cada <strong>R$ 1.000,00</strong> investidos em Campanhas Digitais, é possível alcançar, em média, <strong>80.000 pessoas</strong> com até <strong>3 anúncios</strong> ao longo de um período determinado (<strong>semanal ou mensal</strong>, conforme a estratégia adotada). Esta métrica é um benchmark conhecido e reconhecido no mercado.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal sobre as Fases da Estratégia */}
            <div class="modal fade" id="modalEstrategia" tabindex="-1" aria-labelledby="modalEstrategia" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="modalEstrategia">Sobre as Estratégias</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>O funil de marketing é dividido em três fases essenciais:</p>
                            <ul>
                                <li><strong>Awareness (Conhecimento):</strong> Momento de apresentar a marca ou produto ao público, gerando reconhecimento e interesse inicial.</li>
                                <li><strong>Consideração:</strong> O público já conhece a marca e avalia as opções disponíveis, buscando mais informações e comparações.</li>
                                <li><strong>Decisão:</strong> Última etapa, onde o consumidor está pronto para converter, seja comprando um produto ou entrando em contato.</li>
                            </ul>
                            <p>Em campanhas de <strong>lançamento</strong>, o foco maior costuma ser na fase de Awareness, para atrair um grande público. Já para <strong>marcas ou produtos consolidados</strong>, o investimento tende a ser maior em Consideração e Decisão, impulsionando conversões e fidelização.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal sobre os Canais */}
            <div class="modal fade" id="modalEmpresa" tabindex="-1" aria-labelledby="modalEmpresa" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="modalEmpresa">Sobre o tipo de empresa</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>A escolha dos canais de mídia é fundamental para o sucesso de uma estratégia digital, pois cada plataforma oferece formatos e segmentações específicas que podem ser mais eficientes para determinados públicos e objetivos.</p>
                            <ul>
                                <li><strong>LinkedIn Ads:</strong> Formatos como LinkAd e Documentos são ideais para alcançar decisores de empresas, segmentando por cargo, setor e nome da empresa.</li>
                                <li><strong>Google Ads:</strong> Estratégias de Search e Display permitem impactar usuários com intenção ativa de busca, segmentando por palavras-chave e perfil sociodemográfico.</li>
                                <li><strong>Meta Ads:</strong> LinkAds e Vídeos podem ser usados para construir reconhecimento e atrair públicos. Na segmentação, é possível buscar usuários similares a uma lista prévia (Look-Alike).</li>
                            </ul>
                            <p>Embora todos os canais sejam relevantes, o investimento deve ser direcionado conforme o potencial de cada um para a estratégia da sua empresa. </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal sobre a Taxa de Cliques (CTR), Taxa de Conversão e Ticket Médio */}
            <div class="modal fade" id="modalCtr" tabindex="-1" aria-labelledby="modalCtr" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalCtr">Sobre a Taxa de Cliques (CTR)</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>A <strong>Taxa de Cliques (CTR)</strong> em Campanhas Digitais geralmente varia entre 0,4% e 2% do total de Visualizações, dependendo do canal utilizado, do público-alvo e da qualidade do anúncio. No entanto, na maioria dos casos, essa taxa tende a ficar na faixa de 0,8% a 1%, sendo esse um valor mais comum em campanhas bem segmentadas.</p>
                        <p>Para otimizar os resultados, é essencial investir em criativos atrativos, mensagens relevantes e uma estratégia de segmentação eficaz.</p>
                        <p>Se você já realizou Campanhas Digitais anteriormente e conhece o CTR do seu produto ou marca, ajuste este valor para a porcentagem conhecida.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalConversao" tabindex="-1" aria-labelledby="modalConversao" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalConversao">Sobre a Taxa de Conversão</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>A <strong>Taxa de Conversão</strong> em Campanhas Digitais – seja para compras em e-commerces ou geração de leads – tende a variar entre 0,5% e 5% do total de visitantes que acessaram a página de destino (ou seja, daqueles que clicaram no anúncio). Esse percentual depende de diversos fatores, como a experiência do usuário no site, a oferta apresentada e a qualidade do tráfego gerado. No entanto, na maioria dos casos, a taxa de conversão costuma ficar entre 1% e 2%, sendo esse um valor mais comum para campanhas bem estruturadas.</p>
                        <p>Para maximizar os resultados, é essencial otimizar a página de destino, oferecer uma navegação intuitiva e garantir chamadas para ação (CTAs) eficazes.</p>
                        <p>Se você já realizou Campanhas Digitais anteriormente e conhece a taxa de conversão do seu site, ajuste o indicador.</p> 
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalTicketMedio" tabindex="-1" aria-labelledby="modalTicketMedio" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalTicketMedio">Sobre o Ticket Médio</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>O <strong>Ticket Médio</strong> é um indicador usado para medir o valor médio gasto por cliente em cada compra (conversão). Ele é calculado dividindo o faturamento total pelo número de vendas realizadas em um determinado período.</p>
                        <p>Esse indicador ajuda a entender o comportamento dos consumidores e a eficiência das estratégias de vendas. Um ticket médio mais alto pode indicar que os clientes estão comprando mais itens por vez ou produtos de maior valor. Ele é muito útil para definir metas, planejar promoções e melhorar os resultados do negócio.</p>
                        <p>Se você já conhece o ticket médio da suas operações, ajuste o valor informado.</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modais;