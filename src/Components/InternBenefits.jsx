import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function InternBenefits() {
  return (
    <div className="container">
      <h1 className="main-header">Benefits of Interning with IzIntern</h1>

      <div className="row">
        <div className="col-md-5">
          <img
            src="/side-benefits.png"
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
                  <Card.Title>Professional Growth</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Interns gain practical skills, confidence, and industry
                    knowledge essential for their future careers.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
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
                  <Card.Title>Networking Opportunities</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Build meaningful connections with industry professionals,
                    creating a strong foundation for their career network.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>

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
                  <Card.Title>AI & DS Hackathons</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
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
                  <Card.Title>Another Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
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
                  <Card.Title>Another Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
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
                  <Card.Title>Another Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col-md-12">
            <Card
              className="mt-4"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              <Card.Header>Over All</Card.Header>
              <Card.Body>
                <Card.Title>Resume Enhancement</Card.Title>
                <Card.Text>
                  Gain a competitive edge with a notable internship experience,
                  strengthening their resumes and job prospects.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternBenefits;
