import React from "react";

const VisuallizzaMeteo = ({ dati }) => {
    if (!dati) return null;
}
return (
    <div className="box-meteo">
        <h2>{
            dati.name
        }</h2>
        <p>Temperatura:{
            dati.main.temp
        } °C
        </p>
        <p>
            {dati.weather[0].description}
        </p>
    </div>
)