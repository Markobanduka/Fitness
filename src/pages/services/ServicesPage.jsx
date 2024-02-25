import React from "react";
import { Header } from "../../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ServicesCardsData } from "./ServicesData";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../index.css";
import Footer from "../../components/Footer";

export const ServicesPage = () => {
  return (
    <div>
      <div>
        <header id="header" className="header-services">
          <Header />
        </header>
      </div>
      <div>
        <section id="services" className="block services-block">
          <Container fluid>
            <div className="title-holder">
              <h2>Services</h2>
              <div className="subtitle">Services We Provide</div>
            </div>
            <Row>
              {ServicesCardsData.map((services) => {
                return (
                  <Col sm={4} className="holder" key={services.id}>
                    <div className="icon">
                      <i className={services.icon}></i>
                    </div>
                    <h3>{services.title}</h3>
                    <p className="workout-description">
                      {services.description}
                    </p>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </div>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};
