import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ottenereMeteoPerCitta } from "../servizi/ServizioMeteo";
import BottoneCitta from "../components/BottoneCitta.jsx";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Home = () => {
  const [citta, setCitta] = useState("");
  const navigate = useNavigate();

  const gestisciSubmit = async (e) => {
    e.preventDefault();
    if (!citta) return;

    try {
      const datiMeteo = await ottenereMeteoPerCitta(citta);
      if (datiMeteo) {
        navigate(`/dettagli-meteo/${citta}`, { state: { datiMeteo } });
      } else {
        alert("Nessuna città trovata con questo nome");
      }
    } catch (error) {
      console.error("Errore durante il recupero dei dati meteo:", error);
      alert("Inserisci un nome di città valido");
    }
  };

  const gestisciClickCitta = async (nomeCitta) => {
    const datiMeteo = await ottenereMeteoPerCitta(nomeCitta);
    if (datiMeteo) {
      navigate(`/dettagli-meteo/${nomeCitta}`, { state: { datiMeteo } });
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('https://wallpapers.com/images/hd/weather-background-esftwefx8bta6nun.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={6} lg={5}>
            <Card bg="light" className="p-4 shadow text-center">
              <Card.Body>
                <Card.Title className="mb-3 fw-bold text-dark" style={{ fontSize: "2rem" }}>
  Benvenuti in App Meteo
</Card.Title>

                <Form onSubmit={gestisciSubmit}>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci una città"
                    value={citta}
                    onChange={(e) => setCitta(e.target.value)}
                    className="mb-2"
                  />
                  <Button variant="primary" type="submit" className="w-100 mb-3">
                    Cerca Meteo
                  </Button>
                </Form>

                <div className="d-flex flex-wrap justify-content-center gap-2">
                  <BottoneCitta nome="Roma" onClick={gestisciClickCitta} />
                  <BottoneCitta nome="Milano" onClick={gestisciClickCitta} />
                  <BottoneCitta nome="Napoli" onClick={gestisciClickCitta} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
