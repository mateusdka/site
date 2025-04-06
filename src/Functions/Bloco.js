import Icon from "./Icons";

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