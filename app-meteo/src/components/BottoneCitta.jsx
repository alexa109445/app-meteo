import React from "react";

const BottoneCitta = ({ nomeCitta, onClickCittaSelezionata }) => {
    return (<button onClick={() => onClickCittaSelezionata(nomeCitta)} className="bottone-citta">{nomeCitta}</button>
    )
}
export default BottoneCitta;    