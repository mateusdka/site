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