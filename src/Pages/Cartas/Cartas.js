import Deck from "../../Img/Cartas/cartas_de_tarot.json";

function Cartas() {
  const escolhida = Deck.find((carta) => carta.ID === 13);
  const caminho = require(`../../Img/Cartas/${escolhida.arquivo}`);
    
  return (
    <div>
      <div className="container-lg bg-white rounded p-5 banner-home mt-4 mb-4">
        <h1 className="display-1 banner-text rounded p-3">Cartas</h1>
      </div>

      <div className="container-lg bg-black rounded text-white p-5">
        <h1 className="text-center">{escolhida.nome}</h1>
        <img src={caminho} alt={escolhida.nome} className="img-fluid" />

      </div>
    </div>
  );
}

export default Cartas;
