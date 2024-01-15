import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@izintern.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/internship">Internships</Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://facebook.com/izintern"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/izintern"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} IzIntern. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
