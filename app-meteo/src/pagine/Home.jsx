import React, { use } from "react";
import { ottenereMeteoPerCitta } from "../servizi/ServizioMeteo"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Home = () => {
    const [citta, setCitta] = useState("");
    const navigate = useNavigate();

    const gestisciSubmit = async (e) => {
        e.preventDefault();
        if (citta) {
            navigate(`/dettagli-meteo/${citta}`, { state: { meteoData } })
        } else {
            alert("non ho trovato nessuna cittá con questo nome");
        }
    }
}
return (
    <>
        <div className="home-container">
            <h1>Benvenuti in App Meteo</h1>
        </div>
        <form onSubmit={gestisciSubmit} >
            <input type="text"
                value={citta}
                onChange={(e) => setCitta(e.target.value)}
                placeholder="Inserisci una città">
                <button type="submit">
                    Cerca Meteo
                </button>
            </input>
        </form>
    </>
)
export default Home 
