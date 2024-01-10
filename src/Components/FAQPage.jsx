import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQPage = () => {
  return (
    <div className="container">
      <style>
        {`
    .accordion-item {
      background-color: transparent;
      margin-bottom: 10px;
    }

    .accordion-button {
      background-color: transparent;
      color: white; /* Set text color to white */
      font-family: 'Roboto', sans-serif;
    }

    .accordion-body {
      background-color: transparent;
      color: transparent;
      background: linear-gradient(60deg, #FF512F, #DD2476);
      -webkit-background-clip: text;
      background-clip: text;
    }
  `}
      </style>

      <h1 className="main-header">Frequent Asked Questions</h1>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I apply for an internship?</Accordion.Header>
          <Accordion.Body>
            To apply for an internship, visit our website and complete the
            online application form. Ensure you provide all required information
            and submit any additional documents as requested.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Are internships paid?</Accordion.Header>
          <Accordion.Body>
            No, we offer paid internships in collaboration with our partner
            companies. The remuneration varies depending on the nature of the
            internship and the partnering organization.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is the duration of the internship program?
          </Accordion.Header>
          <Accordion.Body>
            A: The duration of the internship program varies depending on the
            specific role and department. Typically, internships range from 8
            weeks to 6 months.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How can I apply for an internship?
          </Accordion.Header>
          <Accordion.Body>
            A: To apply for an internship, please visit our careers page on the
            official website. There, you can find information about available
            internship positions and submit your application online.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            What qualifications are required to be eligible for an internship?
          </Accordion.Header>
          <Accordion.Body>
            A: Qualifications vary depending on the role, but generally, we look
            for candidates who are pursuing a relevant degree, have a strong
            academic record, and possess relevant skills and experiences
            outlined in the specific internship job description.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            What kind of training and mentorship programs are available for
            interns?
          </Accordion.Header>
          <Accordion.Body>
            A: IzIntern is committed to providing a comprehensive onboarding
            process and ongoing training for our interns. Each intern is
            assigned a mentor who will guide and support them throughout the
            internship period.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            Are there opportunities for full-time employment after completing
            the internship?
          </Accordion.Header>
          <Accordion.Body>
            A: [Company Name] values the contributions of our interns, and many
            have transitioned into full-time roles upon successful completion of
            their internships. However, this is contingent upon job availability
            and the intern's performance during their internship.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            Can I apply for an internship at IzIntern at any time of the year?
          </Accordion.Header>
          <Accordion.Body>
            A: Internship opportunities are typically posted based on business
            needs. While some internships may have specific application windows,
            others may be available throughout the year. Please check our
            careers page regularly for the latest internship openings.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQPage;
