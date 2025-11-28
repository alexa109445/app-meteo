import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pagine/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import DettagliMeteo from './pagine/DettagliMeteo.jsx';
function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dettagli-meteo/:citta' element={<DettagliMeteo />} />
        </Routes>
      </BrowserRouter>
    )

}
export default App
