import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../Styles/HeroSection.css";

function HeroSection() {
  return (
    <Container fluid className="hero-container">
      <Row>
        <Col xs={12} md={6} className="left-part">
          <h1>Internships Kick-Start Your Career</h1>
          <p>IzIntern offers dynamic internship programs to students seeking hands-on experience in their chosen fields. Our carefully crafted internships provide valuable learning opportunities, mentorship, and exposure to real-world scenarios. We aim to bridge the gap between academic learning and professional practice, equipping students with the skills and knowledge needed to succeed in the competitive job market.</p>
          <button className="button">Contact Us Now</button>
        </Col>
        <Col xs={12} md={6} className="right-part">
          <div className="chat">
            <p>Hands on Skills with us...</p>
          </div>
          <Image src="/Teacher.svg" alt="Teacher" fluid />
          <Image src="/Student.svg" alt="Student" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;