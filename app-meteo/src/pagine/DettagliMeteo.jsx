import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ottenerePrevisione5Giorni } from "../servizi/ServizioMeteo.js";
import { Container, Row, Col, Card } from "react-bootstrap";

const sfondiCitta = {
  Roma: "https://www.azutura.com/media/catalog/product/cache/51/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-42443_WP.jpg",
  Milano: "https://media.istockphoto.com/id/1326748838/it/foto/il-duomo-allalba.jpg?s=612x612&w=0&k=20&c=egYn0atXW699MBuUBvstIOtT33uoGp1fXeCMqp3h9kE=",
  Napoli: "https://www.sfondilandia.it/1024/Napoli04.jpg"
};

const DettagliMeteo = () => {
  const location = useLocation();
  const meteoData = location.state.datiMeteo;
  const [previsione, setPrevisione] = useState(null);
  const citta = meteoData.name;

  useEffect(() => {
    const fetchPrevisione = async () => {
      const previsioneData = await ottenerePrevisione5Giorni(citta);
      setPrevisione(previsioneData);
    };
    fetchPrevisione();
  }, [citta]);

  if (!meteoData || !previsione) {
    return (
      <div className="text-light text-center mt-5">
        Caricamento...
      </div>
    );
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${sfondiCitta[citta] || sfondiCitta.Roma})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} sm={10} md={6}>
            <Card bg="dark" text="light" className="mb-3 shadow">
              <Card.Body>
                <Card.Title>Previsioni per {citta}</Card.Title>
                <Card.Text>Temperatura attuale: {meteoData.main.temp}°C</Card.Text>
                <Card.Text>{meteoData.weather[0].description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {previsione.list.slice(0, 5).map((item, index) => (
            <Col xs={12} sm={6} md={4} lg={2} key={index} className="mb-3">
              <Card bg="dark" text="light" className="shadow p-2">
                <Card.Body>
                  <Card.Text>{item.dt_txt}</Card.Text>
                  <Card.Text>{item.main.temp}°C</Card.Text>
                  <Card.Text>{item.weather[0].description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DettagliMeteo;
