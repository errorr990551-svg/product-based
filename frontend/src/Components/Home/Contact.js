import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./Contact.css";
import api from "../../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await api.post("/contact", formData);

      setSuccess("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Banner */}
      <section className="contact-banner">
        <img
          src={require("../../images/Contact us page.jpg")}
          alt="Contact Banner"
          className="contact-banner-img"
        />
      </section>

      {/* Contact Form Section */}
      <Container className="contact-form-section py-5">
        <Row>
          {/* Left Info Section */}
          <Col md={6} className="contact-info">
            <h1 className="mb-3">Get In Touch</h1>
            <p>Here’s how you can reach us,</p>

            <h5 className="mt-4">Talk to sales</h5>
            <p>
              📞 +91-9910693866 <br />
              ☎️ 011-46254603 <br />
              📧 contact@iotaflow.com
            </p>

            <h5 className="mt-4">Contact Service Support</h5>
            <p>
              📞 +91-9779085987 <br />
              📧 account@iotaflow.com
            </p>

            <div className="social-icons mt-3">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>

          {/* Right Form Section */}
          <Col md={6}>
            <h2 className="mb-3">Drop in your details below</h2>
            <p>Let our experts take over from here!</p>

            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {success && <Alert variant="success">{success}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}

              <Button
                className="send-btn w-100"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "SEND MESSAGE"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Location Section */}
      <section className="contact-location py-5">
        <Container>
          <Row>
            <Col md={4} className="text-center mb-3">
              <h6 className="text-uppercase">Our Location</h6>
              <p>A 2/13, Phase-II, Mayapuri Industrial Area, New Delhi – 110064 India</p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <h6 className="text-uppercase">Mailing Address</h6>
              <p>contact@iotaflow.com</p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <h6 className="text-uppercase">Call Us Anytime</h6>
              <p>+91-9910693866 <br /> 011-46254603</p>
            </Col>
          </Row>
        </Container>

        <div className="map-container">
          <iframe
            title="company-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2619677918765!2d77.1224383!3d28.621909699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034d4c4c02d3%3A0x4b397a3052ad9053!2sIOTAFLOW%20Systems%20Pvt%20Ltd%20-%20Flow%20meter%20manufacturer%20%26%20exporter%20in%20india!5e0!3m2!1sen!2sin!4v1755784905876!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
