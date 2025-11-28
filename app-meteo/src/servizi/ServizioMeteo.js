const API_KEY = '4581ed4a75ffef0475104ebe50dad4bb'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const ottenereMeteoPerCitta = async (citta) => {
    try {
        const risposta = await fetch(`${BASE_URL}weather?q=${citta}&appid=${API_KEY}&units=metric&lang=it`)
        if (!risposta.ok) {
            throw new Error('Cittá non trovata')
        }
return await risposta.json()} catch (errore) {console.error('errore nella chiamata API', errore)
    return null
    }}
export {ottenereMeteoPerCitta}

const ottenerePrevisione5Giorni= async (citta) => {
    try {
        const risposta = await fetch(`${BASE_URL}forecast?q=${citta}&appid=${API_KEY}&units=metric&lang=it`)
        if (!risposta.ok) {
            throw new Error('Errrore nella previsione')
        }
        return await risposta.json()
    } catch (errore) {
        console.error('errore nella chiamata API per la previsione dei 5 giorni', errore)
        return null
    }}
export {ottenerePrevisione5Giorni}