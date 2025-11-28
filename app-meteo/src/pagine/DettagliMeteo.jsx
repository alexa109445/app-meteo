import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ottenerePrevisione5Giorni } from "../servizi/ServizioMeteo.js";
import VisualizzaMeteo from "../components/VisualizzaMeteo.jsx";

const DettagliMeteo = () => {
    const location = useLocation();
    const meteoData = location.state.datiMeteo;
    const [previsione, setPrevisione] = useState(null);
    const citta = meteoData.name;

useEffect(() => {
    const fetchPrevisione = async () => {
        const previsioneData = await ottenerePrevisione5Giorni(citta);
        setPrevisione(previsioneData);
    }
    fetchPrevisione();
}, [citta])

if (!meteoData || !previsione) { return <div>Caricamento...</div>; }

return (

    <div className="dettagli-meteo" >
        <h2>
            Previsioni per {citta}:
        </h2>
        <h3>
            Temperatura attuale: {meteoData.main.temp}°C
        </h3>
        <p>
            {meteoData.weather[0].description}
        </p>
        <div>
            <h4>
                Previsioni per i prossimi 5 giorni:
            </h4>
            <ul>
                {previsione.list.slice(0, 5).map((item, index) => (
                    <li key={index}>
                        {item.dt_txt}:, {item.main.temp}°C, {item.weather[0].description}
                    </li>
                ))}
            </ul>
        </div>
    </div>
)}
export default DettagliMeteo