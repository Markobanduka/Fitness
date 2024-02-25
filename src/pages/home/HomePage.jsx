import React from "react";
import { Header } from "../../components/Header";
// import "../index.css";
import Footer from "../../components/Footer";
import Carousel from "react-bootstrap/Carousel";
import { data } from "./HomePageData";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <header id="header" className="header-services">
        <Header />
      </header>
      <section id="home" className="hero-block">
        <Carousel data-bs-theme="dark">
          {data.map((hero) => {
            return (
              <Carousel.Item key={hero.id}>
                <img
                  className="d-block w-100"
                  src={hero.image}
                  alt={"Slide " + hero.id}
                  style={{ height: "640px" }}
                />
                <Carousel.Caption>
                  <h3 className="text-muted d-sm-block">{hero.title}</h3>
                  <p className="text-muted">{hero.description}</p>
                  <Link to={hero.link} className="btn btn-primary">
                    See more
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};
