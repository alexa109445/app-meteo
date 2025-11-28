import React from "react";

const BottoneCitta = ({ nome, onClick }) => {
    return (<button className="bottone-citta" onClick={() => onClick(nome)}>{nome}</button>
    )
}
export default BottoneCitta;    