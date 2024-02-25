import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container fluid>
      <div className="copyright">&copy; 2024 Fitness. All Right Reserved</div>
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
