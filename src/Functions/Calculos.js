function EstrategiaComunicacao(budget, estrategia, empresa) {

    let estrategiaFases = [0, 0, 0];
    estrategia === 0 ? 
        estrategiaFases = [0.5, 0.3, 0.2] : 
        estrategiaFases = [0.2, 0.5, 0.3];

    let awFase = budget * estrategiaFases[0];
    let cnFase = budget * estrategiaFases[1];
    let dcFase = budget * estrategiaFases[2];

    let tipoEmpresa = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    empresa === 0 ?
        tipoEmpresa = [[0.3, 0.3, 0.4], [0.4, 0.2, 0.4], [0.4, 0.2, 0.4]] :
        tipoEmpresa = [[0.4, 0.4, 0.2], [0.5, 0.5, 0], [0.5, 0.5, 0]];

    let awMeta = awFase * tipoEmpresa[0][0];
    let awGoogle = awFase * tipoEmpresa[0][1];
    let awLinkedin = awFase * tipoEmpresa[0][2];

    let cnMeta = cnFase * tipoEmpresa[1][0];
    let cnGoogle = cnFase * tipoEmpresa[1][1];
    let cnLinkedin = cnFase * tipoEmpresa[1][2];

    let dcMeta = dcFase * tipoEmpresa[2][0];
    let dcGoogle = dcFase * tipoEmpresa[2][1];
    let dcLinkedin = dcFase * tipoEmpresa[2][2];

    let invMeta = awMeta + cnMeta + dcMeta;
    let invGoogle = awGoogle + cnGoogle + dcGoogle;
    let invLinkedin = awLinkedin + cnLinkedin + dcLinkedin;

    let invMetaPercent = invMeta / budget;
    let invGooglePercent = invGoogle / budget;
    let invLinkedinPercent = invLinkedin / budget;

    let distrFinal = [[0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0, 0]];

    if (awMeta > 5000) { distrFinal[0][0] = 0.35; distrFinal[0][1] = 0.35; distrFinal[0][2] = 0.30 }
    else { distrFinal[0][0] = 0.40; distrFinal[0][1] = 0.60; distrFinal[0][2] = 0.0; };

    if (awGoogle > 5000) { distrFinal[0][3] = 0.40; distrFinal[0][4] = 0.50; distrFinal[0][5] = 0.10 }
    else { distrFinal[0][3] = 0.50; distrFinal[0][4] = 0.50; distrFinal[0][5] = 0.0; };

    if (awLinkedin > 800) { distrFinal[0][6] = 1.0 } 
    else { distrFinal[0][6] = 0.0; };

    if (cnGoogle > 2000) { distrFinal[1][1] = 0.40; distrFinal[1][2] = 0.60 }
    else { distrFinal[1][1] = 1.00; distrFinal[1][2] = 0.00; };

    if (cnLinkedin > 800) { distrFinal[1][3] = 1.00; } 
    else { distrFinal[1][3] = 0.00; };

    if (dcMeta > 2000) { distrFinal[2][0] = 0.30; distrFinal[2][1] = 0.70 }
    else { distrFinal[2][0] = 0.50; distrFinal[2][1] = 0.50; };

    if (dcGoogle > 2000) { distrFinal[2][2] = 0.60; distrFinal[2][3] = 0.40 }
    else { distrFinal[2][2] = 0.40; distrFinal[2][3] = 0.60; };

    if (dcLinkedin > 800) { distrFinal[2][4] = 1.00; } 
    else { distrFinal[2][4] = 0.00; };

    /* teste */

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