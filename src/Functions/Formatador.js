// Este módulo contém funções para formatar valores em moeda, porcentagem e decimal.
// As funções utilizam a API Intl para formatação localizada, especificamente para o Brasil.
// Isso garante que os valores sejam exibidos corretamente de acordo com as convenções brasileiras.
// As funções são projetadas para serem reutilizáveis em diferentes partes do aplicativo, tornando-o versátil e fácil de manter.

export function formataMoeda(valor,digitos=2) {
    let informado = Number(valor);

    return (
        informado.toLocaleString("pt-br",{style: "currency", currency: "BRL", minimumFractionDigits: digitos })
    )
};

export function formataPercent(valor) {
    let informado = Number(valor);

    return (
        informado.toLocaleString("pt-br",{style: "percent", minimumFractionDigits: "2"})
    )
};

export function formataValores(valor) {
    let informado = Number(valor);

    return (
        informado.toLocaleString("pt-br",{style: "decimal"})
    )
};