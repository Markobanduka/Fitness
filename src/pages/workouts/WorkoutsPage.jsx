import React from "react";
import { Header } from "../../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { WorkoutsCardsData } from "./WorkoutsData";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/Footer";

export const WorkoutsPage = () => {
  return (
    <div className="App">
      <section id="works" className="block works-block">
        <header id="header" className="header-about">
          <Header />
        </header>
        <Container fluid className="pt-5 mt-5">
          <div className="title-holder">
            <h2>Our Workouts</h2>
            <div className="subtitle">Choose Your Workout Type</div>
          </div>
          <Row className="portfoliolist">
            {WorkoutsCardsData.map((workout) => {
              return (
                <Col sm={4} key={workout.id}>
                  <div className="portfolio-wrapper">
                    <Link to={workout.link}>
                      <Image src={workout.image} />
                      <div className="label text-center">
                        <h3>{workout.title}</h3>
                        <p>{workout.subtitle}</p>
                      </div>
                    </Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

{
}
