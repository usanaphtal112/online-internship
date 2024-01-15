import React from "react";

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h1 className="main-header">Contact Us</h1>
      <p>
        Feel free to reach out to us if you have any questions or inquiries. We
        are here to help!
      </p>

      <div className="row">
        <div className="col-md-6">
          <h3>Our Office</h3>
          <p>
            IzIntern Headquarters
            <br />
            123 Street, Cityville
            <br />
            Country
          </p>
        </div>

        <div className="col-md-6">
          <h3>Contact Information</h3>
          <p>Email: info@izintern.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>

      {/* You can add a contact form or any additional information here */}
    </div>
  );
};

export default ContactUs;
