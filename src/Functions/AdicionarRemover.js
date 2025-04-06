import Icon from "./Icons";

// Componente para adicionar e remover itens, especialmente para a Calculadora.
// Recebe como props:
// OperacaoAdd: função para adicionar um item
// OperacaoRemove: função para remover um item
// nomeOperacao: nome da operação a ser exibida
// corIcon: cor do ícone
// infoDisable: informação para desabilitar o botão de remoção
// O componente exibe dois botões: um para adicionar e outro para remover, com o nome da operação entre eles.
// O botão de remoção é desabilitado com base na prop infoDisable.
// O componente é projetado para ser reutilizável em diferentes partes do aplicativo, tornando-o versátil e fácil de manter.

function AddRemove(OperacaoAdd, OperacaoRemove, nomeOperacao, corIcon, infoDisable) {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-dark m-1" onClick={OperacaoRemove} disabled={infoDisable}>
                <Icon name={"remove"} size={20} color={corIcon} />
            </button>
            {nomeOperacao}
            <button className="btn btn-dark m-1" onClick={OperacaoAdd}>
                <Icon name={"add"} size={20} color={corIcon} />
            </button>
            </div>
        </div>
    )
}

export default AddRemove;