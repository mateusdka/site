import Icon from "./Icons";

// Componente para exibir informações em blocos, como ícones, títulos e valores.
// Este componente é utilizado em várias partes do aplicativo para apresentar dados de forma visualmente atraente.
// O componente recebe ícones, tamanhos, cores, títulos e valores como propriedades para personalização.
// O componente também pode incluir um botão de ajuda que, quando clicado, exibe um modal com informações adicionais.
// O componente é projetado para ser reutilizável em diferentes partes do aplicativo, tornando-o versátil e fácil de manter.

function Bloco(iconName, iconSize, iconColor, title, valueDisplay, valueSubtitle,helpModal,modalName) {

  return (
    <div className="position-relative">
        { helpModal === 1 ?
            <button type="button" className="btn position-absolute top-0 end-0" data-bs-toggle="modal" data-bs-target={modalName}>
              <Icon name="help" size={25} color="grey" />
            </button>
        : "" }
        <Icon name={iconName} size={iconSize} color={iconColor} />
        <p className="fw-bold">{title}
        </p>
        <p className="display-5">{valueDisplay}</p>
        <p>{valueSubtitle}</p>
    </div>
  );
}
export default Bloco;