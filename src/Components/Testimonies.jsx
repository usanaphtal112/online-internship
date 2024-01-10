import React from "react";
import Card from "react-bootstrap/Card";

export const Testimonies = () => {
  return (
    <div className="container">
      <h1 className="main-header">Testimonials</h1>

      <div className="row align-items-stretch">
        <div className="col-md-5 align-self-start">
          <img
            src="/side-testimonial.jpg"
            alt="Internship Programs"
            className="img-fluid mb-4"
          />
        </div>

        <div className="col-md-7">
          <div className="row">
            <div className="col-md-6 mb-4">
              <Card
                className="h-100"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Title> 1. Life-Changing Experience</Card.Title>
                  <Card.Text>
                    My internship at IzIntern was truly transformational. The
                    mentorship and practical exposure significantly impacted my
                    career trajectory.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-6 mb-4">
              <Card
                className="h-100"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Title>2. Invaluable Connections</Card.Title>
                  <Card.Text>
                    The opportunity to network and learn from industry leaders
                    during my internship was priceless, and it opened doors for
                    my future career.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mb-4">
              <Card
                className="h-100"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Title>3. Skill Development</Card.Title>
                  <Card.Text>
                    IzIntern provided an environment where I could develop
                    crucial skills and gain confidence in my chosen field,
                    laying the foundation for my professional journey.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-4">
              <Card
                className="h-100"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Title>3. Skill Development</Card.Title>
                  <Card.Text>
                    IzIntern provided an environment where I could develop
                    crucial skills and gain confidence in my chosen field,
                    laying the foundation for my professional journey.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
