
// Esta função calcula a distribuição do orçamento de comunicação entre diferentes canais e fases, com base na estratégia escolhida e no tipo de empresa.
// A função recebe três parâmetros:
// 1. budget: o orçamento total disponível para comunicação.
// 2. estrategia: a estratégia de comunicação escolhida (0 ou 1).
// 3. empresa: o tipo de empresa (0 ou 1).

function EstrategiaComunicacao(budget, estrategia, empresa) {

    // Definindo a distribuição do orçamento entre as fases de comunicação com base na estratégia escolhida.
    // A estratégia 0 prioriza a fase de awareness (conhecimento), enquanto a estratégia 1 prioriza a fase de consideration (consideração).
    // A distribuição é feita em três fases: awareness (aw), consideration (cn) e decision (dc).
    let estrategiaFases = [0, 0, 0];
    estrategia === 0 ? 
        estrategiaFases = [0.5, 0.3, 0.2] : 
        estrategiaFases = [0.2, 0.5, 0.3]; 

    // Calculando o valor de cada fase com base no orçamento total e na distribuição definida.
    let awFase = budget * estrategiaFases[0];
    let cnFase = budget * estrategiaFases[1];
    let dcFase = budget * estrategiaFases[2];

    // Definindo a distribuição do orçamento entre os canais de comunicação (Meta, Google e LinkedIn) com base no tipo de empresa.
    // A distribuição é feita em três canais: Meta, Google e LinkedIn.
    // A distribuição varia dependendo do tipo de empresa (0 ou 1).
    // A matriz tipoEmpresa define a proporção de investimento em cada canal para cada fase.
    let tipoEmpresa = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    empresa === 0 ?
        tipoEmpresa = [[0.3, 0.3, 0.4], [0.4, 0.2, 0.4], [0.4, 0.2, 0.4]] :
        tipoEmpresa = [[0.4, 0.4, 0.2], [0.5, 0.5, 0], [0.5, 0.5, 0]];

    // Calculando o valor a ser investido em cada canal de comunicação (Meta, Google e LinkedIn) para cada fase.
    let awMeta = awFase * tipoEmpresa[0][0];
    let awGoogle = awFase * tipoEmpresa[0][1];
    let awLinkedin = awFase * tipoEmpresa[0][2];

    let cnMeta = cnFase * tipoEmpresa[1][0];
    let cnGoogle = cnFase * tipoEmpresa[1][1];
    let cnLinkedin = cnFase * tipoEmpresa[1][2];

    let dcMeta = dcFase * tipoEmpresa[2][0];
    let dcGoogle = dcFase * tipoEmpresa[2][1];
    let dcLinkedin = dcFase * tipoEmpresa[2][2];

    // Calculando o valor total a ser investido em cada canal de comunicação (Meta, Google e LinkedIn) somando os valores de todas as fases.
    let invMeta = awMeta + cnMeta + dcMeta;
    let invGoogle = awGoogle + cnGoogle + dcGoogle;
    let invLinkedin = awLinkedin + cnLinkedin + dcLinkedin;

    // Calculando a porcentagem do investimento em cada canal em relação ao orçamento total.
    let invMetaPercent = invMeta / budget;
    let invGooglePercent = invGoogle / budget;
    let invLinkedinPercent = invLinkedin / budget;

    // Definindo a distribuição final do orçamento entre os canais de comunicação com base em condições específicas.
    let distrFinal = [[0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0, 0]];

    // A distribuição é ajustada com base em valores específicos de investimento em cada canal.
    // Se o investimento em Meta for maior que 5000, a distribuição é ajustada para comportar segmentações como Look Alike.
    if (awMeta > 5000) { distrFinal[0][0] = 0.35; distrFinal[0][1] = 0.35; distrFinal[0][2] = 0.30 }
    else { distrFinal[0][0] = 0.40; distrFinal[0][1] = 0.60; distrFinal[0][2] = 0.0; };

    // Se o investimento em Google for maior que 5000, a distribuição é ajustada para comportar segmentações com Listas.
    if (awGoogle > 5000) { distrFinal[0][3] = 0.40; distrFinal[0][4] = 0.50; distrFinal[0][5] = 0.10 }
    else { distrFinal[0][3] = 0.50; distrFinal[0][4] = 0.50; distrFinal[0][5] = 0.0; };
    
    // O Linkedin exige um investimento mínimo de 800 para ser considerado.
    if (awLinkedin > 800) { distrFinal[0][6] = 1.0 } 
    else { distrFinal[0][6] = 0.0; };

    // Se o investimento em Google for maior que 2000, a distribuição é ajustada para comportar o uso de Banners (Display).
    // Caso contrário, a distribuição é ajustada para comportar apenas o uso de Search.
    if (cnGoogle > 2000) { distrFinal[1][1] = 0.40; distrFinal[1][2] = 0.60 }
    else { distrFinal[1][1] = 1.00; distrFinal[1][2] = 0.00; };

    // O Linkedin exige um investimento mínimo de 800 para ser considerado.
    if (cnLinkedin > 800) { distrFinal[1][3] = 1.00; } 
    else { distrFinal[1][3] = 0.00; };

    // Se o investimento em Meta for maior que 2000, a distribuição é ajustada para comportar o uso do formato Lead Ad.
    if (dcMeta > 2000) { distrFinal[2][0] = 0.30; distrFinal[2][1] = 0.70 }
    else { distrFinal[2][0] = 0.50; distrFinal[2][1] = 0.50; };

    // Se o investimento em Google for maior que 2000, a distribuição é ajustada para comportar o uso de Banners (Display).
    if (dcGoogle > 2000) { distrFinal[2][2] = 0.60; distrFinal[2][3] = 0.40 }
    else { distrFinal[2][2] = 0.40; distrFinal[2][3] = 0.60; };

    // O Linkedin exige um investimento mínimo de 800 para ser considerado.
    if (dcLinkedin > 800) { distrFinal[2][4] = 1.00; } 
    else { distrFinal[2][4] = 0.00; };

    // A distribuição final é ajustada com base nos valores de investimento em cada canal.
    let investFinal = [
        [
            distrFinal[0][0] * awMeta,
            distrFinal[0][1] * awMeta,
            distrFinal[0][2] * awMeta,
            distrFinal[0][3] * awGoogle,
            distrFinal[0][4] * awGoogle,
            distrFinal[0][5] * awGoogle,
            distrFinal[0][6] * awLinkedin,
        ],[
            distrFinal[1][0] * cnMeta,
            distrFinal[1][1] * cnGoogle,
            distrFinal[1][2] * cnGoogle,
            distrFinal[1][3] * cnLinkedin,
        ],[
            distrFinal[2][0] * dcMeta,
            distrFinal[2][1] * dcMeta,
            distrFinal[2][2] * dcGoogle,
            distrFinal[2][3] * dcGoogle,
            distrFinal[2][4] * dcLinkedin
        ]
    ];

    // Retornando um objeto com todas as informações calculadas, incluindo os valores de investimento em cada fase e canal.
    return ({
        "awFase" : awFase,
        "awFaseP" : estrategiaFases[0],
        "cnFase" : cnFase,
        "cnFaseP" : estrategiaFases[1],
        "dcFase" : dcFase,
        "dcFaseP" : estrategiaFases[2],
        
        "invMeta" : invMeta,
        "invMetaP" : invMetaPercent,

        "invGoogle" : invGoogle,
        "invGoogleP" : invGooglePercent,

        "invLinkedin" : invLinkedin,
        "invLinkedinP" : invLinkedinPercent,
        
        "awMeta" : awMeta,
        "awMetaP" : tipoEmpresa[0][0],
        "cnMeta" : cnMeta,
        "cnMetaP" : tipoEmpresa[1][0],
        "dcMeta" : dcMeta,
        "dcMetaP" : tipoEmpresa[2][0],
        
        "awGoogle" : awGoogle,
        "awGoogleP" : tipoEmpresa[0][1],
        "cnGoogle" : cnGoogle,
        "cnGoogleP" : tipoEmpresa[1][1],
        "dcGoogle" : dcGoogle,
        "dcGoogleP" : tipoEmpresa[2][1],
        
        "awLinkedin" : awLinkedin,
        "awLinkedinP" : tipoEmpresa[0][2],
        "cnLinkedin" : cnLinkedin,
        "cnLinkedinP" : tipoEmpresa[1][2],
        "dcLinkedin" : dcLinkedin,
        "dcLinkedinP" : tipoEmpresa[2][2],
        
        "distrFinal" : distrFinal,
        "investFinal" : investFinal,
    });
};

export default EstrategiaComunicacao;