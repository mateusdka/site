import React, { useState } from "react";
import EstrategiaComunicacao from "../Functions/Calculos";
import Icon from "../Functions/Icons";
import { formataMoeda, formataPercent } from "../Functions/Formatador";
import logoMeta from "../Img/meta.svg";
import logoGoogle from "../Img/googleads.svg";
import logoLinkedin from "../Img/linkedin.svg";

function CalcDistribuicao({ budget }) {
    const [estrategia, setEstrategia] = useState(0);
    const [empresa, setEmpresa] = useState(0);
    const calculo = EstrategiaComunicacao(budget, estrategia, empresa);

    return (
        <div>
            <div className="row gap-4 mt-4">

                <div className="col-lg bg-dark rounded p-3 position-relative">
                    <button type="button" className="btn position-absolute top-0 end-0" data-bs-toggle="modal" data-bs-target="#modalEstrategia">
                        <Icon name="help" size={25} color="grey" />
                    </button>
                    <h3 className="mt-3">Distribuição por Fases</h3>
                    <p><strong>Estratégia aplicada:</strong> {estrategia === 0 ? "Lançamento de Produto/Empresa" : "Ampliação da Comunicação"}</p>

                    <button className="btn btn-outline-light" onClick={estrategia === 0 ? () => setEstrategia(1) : () => setEstrategia(0)}>
                        <Icon name="refresh" size={16} color="grey" /> Trocar Estratégia
                    </button>

                    <p className="mt-4"><strong>Awareness:</strong> {formataMoeda(calculo.awFase)}</p>
                    <div className="progress">
                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow={calculo.awFaseP * 100} aria-valuemin="0" aria-valuemax="100" style={{ width: `${calculo.awFaseP * 100}%` }}>{formataPercent(calculo.awFaseP)}</div>
                    </div>

                    <p className="mt-4"><strong>Consideração:</strong> {formataMoeda(calculo.cnFase)}</p>
                    <div className="progress">
                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow={calculo.cnFaseP * 100} aria-valuemin="0" aria-valuemax="100" style={{ width: `${calculo.cnFaseP * 100}%` }}>{formataPercent(calculo.cnFaseP)}</div>
                    </div>

                    <p className="mt-4"><strong>Decisão:</strong> {formataMoeda(calculo.dcFase)}</p>
                    <div className="progress">
                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow={calculo.dcFaseP * 100} aria-valuemin="0" aria-valuemax="100" style={{ width: `${calculo.dcFaseP * 100}%` }}>{formataPercent(calculo.dcFaseP)}</div>
                    </div>

                </div>

                <div className="col-lg bg-dark rounded p-3 position-relative">
                    <button type="button" className="btn position-absolute top-0 end-0" data-bs-toggle="modal" data-bs-target="#modalEmpresa">
                        <Icon name="help" size={25} color="grey" />
                    </button>
                    <h3 className="mt-3">Distribuição por Canais</h3>
                    <p><strong>Estratégia aplicada:</strong> {empresa === 0 ? "Empresa/Produto B2B ou de Nicho" : "Empresa/Produto de Varejo/E-Commerce"}</p>

                    <button className="btn btn-outline-light" onClick={empresa === 0 ? () => setEmpresa(1) : () => setEmpresa(0)}>
                        <Icon name="refresh" size={16} color="grey" /> Trocar Estratégia
                    </button>

                    <p className="mt-4"><strong>Meta Ads:</strong> {formataMoeda(calculo.invMeta)}</p>
                    <div className="progress">
                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow={calculo.invMetaP * 100} aria-valuemin="0" aria-valuemax="100" style={{ width: `${calculo.invMetaP * 100}%` }}>{formataPercent(calculo.invMetaP)}</div>
                    </div>

                    <p className="mt-4"><strong>Google Ads:</strong> {formataMoeda(calculo.invGoogle)}</p>
                    <div className="progress">
                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow={calculo.invGoogleP * 100} aria-valuemin="0" aria-valuemax="100" style={{ width: `${calculo.invGoogleP * 100}%` }}>{formataPercent(calculo.invGoogleP)}</div>
                    </div>

                    <p className="mt-4"><strong>LinkedIn Ads:</strong> {formataMoeda(calculo.invLinkedin)}</p>
                    <div className="progress">
                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow={calculo.invLinkedinP * 100} aria-valuemin="0" aria-valuemax="100" style={{ width: `${calculo.invLinkedinP * 100}%` }}>{formataPercent(calculo.invLinkedinP)}</div>
                    </div>

                </div>
            </div>

            <div className="row gap-4 mt-4">

                <div className="bg-dark rounded p-3  table-responsive-lg">
                    <table className="table table-dark table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Canal</th>
                                <th scope="col">Formato</th>
                                <th scope="col">Segmentação</th>
                                <th scope="col">Valor Mensal</th>
                                <th scope="col">Valor Diário</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-secondary">
                                <td><Icon name="awareness" size={21} color="black" /> Awareness</td>
                                <td></td>
                                <td></td>
                                <td>{ formataMoeda(calculo.awFase) } ({formataPercent(calculo.awFaseP)} do Total)</td>
                                <td>{ formataMoeda((budget * calculo.awFaseP) / 30.4) }</td>
                            </tr>
                            <tr className="table-active">
                                <td><img src={logoMeta} width={21} height={21} alt="Meta Ads" /> Meta Ads</td>
                                <td></td>
                                <td></td>
                                <td>{ formataMoeda(calculo.awMeta) } ({formataPercent(calculo.awMetaP)} do Awareness)</td>
                                <td>{ formataMoeda((calculo.awMeta) / 30.4) }</td>
                            </tr>
                            <tr>
                                <td><img src={logoMeta} width={21} height={21} alt="Meta Ads" /> Meta Ads</td>
                                <td><Icon name="post" size={16} color="white" /> Dark Post</td>
                                <td><Icon name="profile" size={16} color="white" /> Perfil de Público</td>
                                <td>{ formataMoeda(calculo.investFinal[0][0]) } ({ formataPercent(calculo.distrFinal[0][0]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[0][0] / 30.4) }</td>
                            </tr>
                            <tr>
                                <td><img src={logoMeta} width={21} height={21} alt="Meta Ads" /> Meta Ads</td>
                                <td><Icon name="video" size={16} color="white" /> Dark Post (Vídeo)</td>
                                <td><Icon name="profile" size={16} color="white" /> Perfil de Público</td>
                                <td>{ formataMoeda(calculo.investFinal[0][1]) } ({ formataPercent(calculo.distrFinal[0][1]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[0][1] / 30.4) }</td>
                            </tr>
                            <tr>
                                <td><img src={logoMeta} width={21} height={21} alt="Meta Ads" /> Meta Ads</td>
                                <td><Icon name="post" size={16} color="white" /> Dark Post</td>
                                <td><Icon name="lookalike" size={16} color="white" /> Look Alike</td>
                                <td>{ formataMoeda(calculo.investFinal[0][2]) } ({ formataPercent(calculo.distrFinal[0][2]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[0][2] / 30.4) }</td>
                            </tr>
                            <tr className="table-active">
                                <td><img src={logoGoogle} width={21} height={21} alt="Google Ads" /> Google Ads</td>
                                <td></td>
                                <td></td>
                                <td>{ formataMoeda(calculo.awGoogle) } ({formataPercent(calculo.awGoogleP)} do Awareness)</td>
                                <td>{ formataMoeda(calculo.awGoogle / 30.4) }</td>
                            </tr>
                            <tr>
                                <td><img src={logoGoogle} width={21} height={21} alt="Google Ads" /> Google Ads</td>
                                <td><Icon name="search" size={16} color="white" /> Busca (Search)</td>
                                <td><Icon name="keyword" size={16} color="white" /> Palavras-chave</td>
                                <td>{ formataMoeda(calculo.investFinal[0][3]) } ({ formataPercent(calculo.distrFinal[0][3]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[0][3] / 30.4) }</td>
                            </tr>
                            <tr>
                                <td><img src={logoGoogle} width={21} height={21} alt="Google Ads" /> Google Ads</td>
                                <td><Icon name="display" size={16} color="white" /> Banners (Display)</td>
                                <td><Icon name="profile" size={16} color="white" /> Perfil do Público</td>
                                <td>{ formataMoeda(calculo.investFinal[0][4]) } ({ formataPercent(calculo.distrFinal[0][4]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[0][4] / 30.4) }</td>
                            </tr>
                            <tr>
                                <td><img src={logoGoogle} width={21} height={21} alt="Google Ads" /> Google Ads</td>
                                <td><Icon name="search" size={16} color="white" /> Banner (Display)</td>
                                <td><Icon name="lookalike" size={16} color="white" /> Listas</td>
                                <td>{ formataMoeda(calculo.investFinal[0][5]) } ({ formataPercent(calculo.distrFinal[0][5]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[0][5] / 30.4) }</td>
                            </tr>
                            <tr className="table-active">
                                <td><img src={logoLinkedin} width={21} height={21} alt="LinkedIn Ads" /> LinkedIn Ads</td>
                                <td></td>
                                <td></td>
                                <td>{ formataMoeda(calculo.awLinkedin) } ({formataPercent(calculo.awLinkedinP)} do Awareness)</td>
                                <td>{ formataMoeda(calculo.awLinkedin / 30.4) } {calculo.awLinkedin < 800 ? <Icon name="alert" size={16} color="orange" /> : ""}</td>
                            </tr>
                            <tr>
                                <td><img src={logoLinkedin} width={21} height={21} alt="LinkedIn Ads" /> LinkedIn Ads</td>
                                <td><Icon name="post" size={16} color="white" /> Dark Post (Patrocinado)</td>
                                <td><Icon name="profile" size={16} color="white" /> Perfil do Público</td>
                                <td>{ formataMoeda(calculo.investFinal[0][6]) } ({ formataPercent(calculo.distrFinal[0][6]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[0][6] / 30.4) }</td>
                            </tr>
                            <tr className="table-secondary">
                                <td><Icon name="consideration" size={21} color="black" /> Consideração</td>
                                <td></td>
                                <td></td>
                                <td>{ formataMoeda(calculo.cnFase) } ({formataPercent(calculo.cnFaseP)} do Total)</td>
                                <td>{ formataMoeda(calculo.cnFase / 30.4) }</td>
                            </tr>
                            <tr className="table-active">
                                <td><img src={logoMeta} width={21} height={21} alt="Meta Ads" /> Meta Ads</td>
                                <td></td>
                                <td></td>
                                <td>{ formataMoeda(calculo.cnMeta) } ({formataPercent(calculo.cnMetaP)} da Consideração)</td>
                                <td>{ formataMoeda(calculo.cnMeta / 30.4) }</td>
                            </tr>
                            <tr>
                                <td><img src={logoMeta} width={21} height={21} alt="Meta Ads" /> Meta Ads</td>
                                <td><Icon name="post" size={16} color="white" /> Dark Post</td>
                                <td><Icon name="remarketing" size={16} color="white" /> Remarketing</td>
                                <td>{ formataMoeda(calculo.investFinal[1][0]) } ({ formataPercent(calculo.distrFinal[1][0]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[1][0] / 30.4) }</td>
                            </tr>
                            <tr className="table-active">
                                <td><img src={logoGoogle} width={21} height={21} alt="Google Ads" /> Google Ads</td>
                                <td></td>
                                <td></td>
                                <td>{ formataMoeda(calculo.cnGoogle) } ({formataPercent(calculo.cnGoogleP)} da Consideração)</td>
                                <td>{ formataMoeda(calculo.cnGoogle / 30.4) }</td>
                            </tr>
                            <tr>
                                <td><img src={logoGoogle} width={21} height={21} alt="Google Ads" /> Google Ads</td>
                                <td><Icon name="search" size={16} color="white" /> Busca (Search)</td>
                                <td><Icon name="keyword" size={16} color="white" /> Palavras-chave</td>
                                <td>{ formataMoeda(calculo.investFinal[1][1]) } ({ formataPercent(calculo.distrFinal[1][1]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[1][1] / 30.4) }</td>
                            </tr>
                            <tr>
                                <td><img src={logoGoogle} width={21} height={21} alt="Google Ads" /> Google Ads</td>
                                <td><Icon name="display" size={16} color="white" /> Banners (Display)</td>
                                <td><Icon name="remarketing" size={16} color="white" /> Remarketing</td>
                                <td>{ formataMoeda(calculo.investFinal[1][2]) } ({ formataPercent(calculo.distrFinal[1][2]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[1][2] / 30.4) }</td>
                            </tr>
                            <tr className="table-active">
                                <td><img src={logoLinkedin} width={21} height={21} alt="LinkedIn Ads" /> LinkedIn Ads</td>
                                <td></td>
                                <td></td>
                                <td>{ formataMoeda(calculo.cnLinkedin) } ({formataPercent(calculo.cnLinkedinP)} da Consideração)</td>
                                <td>{ formataMoeda(calculo.cnLinkedin / 30.4) } {calculo.cnLinkedin < 800 ? <Icon name="alert" size={16} color="orange" /> : ""}</td>
                            </tr>
                            <tr>
                                <td><img src={logoLinkedin} width={21} height={21} alt="LinkedIn Ads" /> LinkedIn Ads</td>
                                <td><Icon name="post" size={16} color="white" /> Dark Post (Patrocinado)</td>
                                <td><Icon name="remarketing" size={16} color="white" /> Remarketing</td>
                                <td>{ formataMoeda(calculo.investFinal[1][3]) } ({ formataPercent(calculo.distrFinal[1][3]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[1][3] / 30.4) }</td>
                            </tr>
                            <tr className="table-secondary">
                                <td><Icon name="decision" size={21} color="black" /> Decisão</td>
                                <td></td>
                                <td></td>
                                <td>{ formataMoeda(calculo.dcFase) } ({formataPercent(calculo.dcFaseP)} do Total)</td>
                                <td>{ formataMoeda(calculo.dcFase / 30.4) }</td>
                            </tr>
                            <tr className="table-active">
                                <td><img src={logoMeta} width={21} height={21} alt="Meta Ads" /> Meta Ads</td>
                                <td></td>
                                <td></td>
                                <td>{ formataMoeda(calculo.dcMeta) } ({formataPercent(calculo.dcMetaP)} da Decisão)</td>
                                <td>{ formataMoeda((calculo.dcMeta) / 30.4) }</td>
                            </tr>
                            <tr>
                                <td><img src={logoMeta} width={21} height={21} alt="Meta Ads" /> Meta Ads</td>
                                <td><Icon name="post" size={16} color="white" /> Dark Post</td>
                                <td><Icon name="remarketing" size={16} color="white" /> Remarketing</td>
                                <td>{ formataMoeda(calculo.investFinal[2][0]) } ({ formataPercent(calculo.distrFinal[2][0]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[2][0] / 30.4) }</td>
                            </tr>
                            <tr>
                                <td><img src={logoMeta} width={21} height={21} alt="Meta Ads" /> Meta Ads</td>
                                <td><Icon name="video" size={16} color="white" /> Dark Post</td>
                                <td><Icon name="leadad" size={16} color="white" /> Contato (Lead Ad ou WhatsApp)</td>
                                <td>{ formataMoeda(calculo.investFinal[2][1]) } ({ formataPercent(calculo.distrFinal[2][1]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[2][1] / 30.4) }</td>
                            </tr>
                            <tr className="table-active">
                                <td><img src={logoGoogle} width={21} height={21} alt="Google Ads" /> Google Ads</td>
                                <td></td>
                                <td></td>
                                <td>{ formataMoeda(calculo.dcGoogle) } ({formataPercent(calculo.dcGoogleP)} da Consideração)</td>
                                <td>{ formataMoeda(calculo.dcGoogle / 30.4) }</td>
                            </tr>
                            <tr>
                                <td><img src={logoGoogle} width={21} height={21} alt="Google Ads" /> Google Ads</td>
                                <td><Icon name="search" size={16} color="white" /> Busca (Search)</td>
                                <td><Icon name="keyword" size={16} color="white" /> Palavras-chave</td>
                                <td>{ formataMoeda(calculo.investFinal[2][2]) } ({ formataPercent(calculo.distrFinal[2][2]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[2][2] / 30.4) }</td>
                            </tr>
                            <tr>
                                <td><img src={logoGoogle} width={21} height={21} alt="Google Ads" /> Google Ads</td>
                                <td><Icon name="display" size={16} color="white" /> Banners (Display)</td>
                                <td><Icon name="remarketing" size={16} color="white" /> Remarketing</td>
                                <td>{ formataMoeda(calculo.investFinal[2][3]) } ({ formataPercent(calculo.distrFinal[2][3]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[2][3] / 30.4) }</td>
                            </tr>
                            <tr className="table-active">
                                <td><img src={logoLinkedin} width={21} height={21} alt="LinkedIn Ads" /> LinkedIn Ads</td>
                                <td></td>
                                <td></td>
                                <td>{ formataMoeda(calculo.dcLinkedin) } ({formataPercent(calculo.dcLinkedinP)} da Consideração)</td>
                                <td>{ formataMoeda(calculo.dcLinkedin / 30.4) } {calculo.dcLinkedin < 800 ? <Icon name="alert" size={16} color="orange" /> : ""}</td>
                            </tr>
                            <tr>
                                <td><img src={logoLinkedin} width={21} height={21} alt="LinkedIn Ads" /> LinkedIn Ads</td>
                                <td><Icon name="document" size={16} color="white" /> Documento</td>
                                <td><Icon name="remarketing" size={16} color="white" /> Remarketing</td>
                                <td>{ formataMoeda(calculo.investFinal[2][4]) } ({ formataPercent(calculo.distrFinal[2][4]) })</td>
                                <td>{ formataMoeda(calculo.investFinal[2][4] / 30.4) }</td>
                            </tr>
                        </tbody>
                    </table>
                    { calculo.awLinkedin < 800 || calculo.cnLinkedin < 800 || calculo.dcLinkedin < 800 ? 
                        <div className="row alert alert-warning align-items-start m-1" role="alert">
                            <span className="col-lg-1 mb-0"><Icon name="alert" size={48} color="orange" /></span>
                            <p className="col-lg-11 mb-0"><strong>Atenção:</strong> a plataforma LinkedIn Ads aceita apenas investimentos superiores a R$ 800,00 por mês. Considere aumentar o investimento ou redirecionar os valores deste Canal para outras ações.</p>
                        </div> : "" }
                </div>
            </div>
        </div>
    );
}

export default CalcDistribuicao;