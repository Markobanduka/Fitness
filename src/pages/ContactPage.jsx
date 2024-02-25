import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Header } from "../components/Header";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";

const ContactPage = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      )
      .then((result) => {
        setSuccess(true);
        setError(false); // Reset error state on successful submission
      })
      .catch((error) => {
        setError(true);
        setSuccess(false); // Reset success state on error
      });
  };

  return (
    <div>
      <div>
        <header id="header" className="header-services">
          <Header />
        </header>
      </div>
      <section id="contact" className="block contact-block mt-5">
        <Container fluid>
          <div className="title-holder">
            <h2>Contact Us</h2>
            <div className="subtitle">Get In Touch</div>
          </div>
          <Form className="contact-form" ref={formRef} onSubmit={sendEmail}>
            <Row>
              <Col sm={4}>
                <Form.Control type="text" required placeholder="Name" />
              </Col>
              <Col sm={4}>
                <Form.Control type="email" required placeholder="Email" />
              </Col>
              <Col sm={4}>
                <Form.Control type="tel" required placeholder="Number" />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  required
                />
              </Col>
            </Row>
            <div className="btn-holder">
              <Button variant="primary" type="submit">
                Send
              </Button>
            </div>
            {error && (
              <div className="error-message">Error sending message</div>
            )}
            {success && (
              <div className="success-message">Message sent successfully</div>
            )}
          </Form>
        </Container>
        <div className="google-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7217.998192907716!2d55.4317633087864!3d25.236955405492125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f609cdf641a4b%3A0x6ad5862f3654562a!2sGymNation%20Mirdif%20%7C%20Best%20Gym%20in%20Mirdif!5e0!3m2!1sen!2sae!4v1708864958566!5m2!1sen!2sae"
            loading="lazy"
          ></iframe>
        </div>
        <Container fluid>
          <div className="contact-info">
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                fitness@gmail.com
              </li>
              <li>
                <i className="fas fa-phone"></i>
                +971 9876543210
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                Mirdif, Dubai
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default ContactPage;
