import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { sharedBackgroundStyle } from "../styles";

const NavBar = () => {
  const navbarStyle = {
    marginTop: "40px",
    ...sharedBackgroundStyle,
    borderBottom: "2px solid white",
  };

  return (
    <>
      <Navbar style={navbarStyle} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/home">IzIntern</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#service">Services</Nav.Link>
              <Nav.Link href="/internship">Internships</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavBar;
