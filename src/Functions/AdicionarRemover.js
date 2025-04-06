import Icon from "./Icons";

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