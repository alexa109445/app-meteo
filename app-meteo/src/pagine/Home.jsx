import { ottenereMeteoPerCitta } from "../servizi/ServizioMeteo"
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import VisualizzaMeteo from "../components/VisualizzaMeteo";
import BottoneCitta from "../components/BottoneCitta.jsx";


const Home = () => {
    const [citta, setCitta] = useState("");
    const [meteo, setMeteo] = useState(null);
    const navigate = useNavigate();

    const gestisciSubmit = async (e) => {
        e.preventDefault();
        if (citta) {
try {const datiMeteo = await ottenereMeteoPerCitta(citta)
        if (datiMeteo) { navigate(`/dettagli-meteo/${citta}`, { state: { datiMeteo } })
        } else {
            alert("non ho trovato nessuna cittá con questo nome");
        }
    }
    catch (error){ console.error("Errore durante il recupero dei dati meteo:", error); alert("inserisci un nome di cittá valido"); }
}}
const gestisciClickCitta = async (nomeCitta) => {
    const datiMeteo = await ottenereMeteoPerCitta(nomeCitta);
    if (datiMeteo) {
        navigate(`/dettagli-meteo/${nomeCitta}`, { state: { datiMeteo } });
    }
}

return (
        <div className="home-container">
            <h1>Benvenuti in App Meteo</h1>
     
        <form onSubmit={gestisciSubmit} >
            <input type="text"
                value={citta}
                onChange={(e) => setCitta(e.target.value)}
                placeholder="Inserisci una città"/>
                <button type="submit">
                    Cerca Meteo
                </button>
        </form>
        <h3>Altre città:</h3>
        <BottoneCitta nome="Roma" onClick={gestisciClickCitta} />
        <BottoneCitta nome="Milano" onClick={gestisciClickCitta} />
        <BottoneCitta nome="Napoli" onClick={gestisciClickCitta} />
        <h3>
        <VisualizzaMeteo dati={meteo} />
        </h3>
        </div>
)}
export default Home 
