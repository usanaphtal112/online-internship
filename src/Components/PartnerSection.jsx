import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const PartnerSection = () => {
  const imageSize = {
    height: "200px",
    width: "100%",
  };

  const cardStyle = {
    background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
    color: "white", // Text color
  };

  return (
    <div>
      <h1 className="main-header">Our Partner Companies</h1>
      <Row>
        <Col sm={12} md={6}>
          <Card className="responsive-card" style={cardStyle}>
            <Card.Body>
              <Card.Title>Global Corporations</Card.Title>
              <Card.Text>
                Collaborate with renowned multinational companies to provide
                diverse internship opportunities.
              </Card.Text>
            </Card.Body>
            <Card.Img
              variant="top"
              src="partner-image-2.jpg"
              style={imageSize}
            />
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="responsive-card" style={cardStyle}>
            <Card.Body>
              <Card.Title>Start-up Ecosystem</Card.Title>
              <Card.Text>
                Connect with innovative start-ups, offering interns exposure to
                dynamic and entrepreneurial work environments.
              </Card.Text>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="/partner-image-1.jpg"
              style={imageSize}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
