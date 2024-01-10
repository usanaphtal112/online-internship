import React from "react";

function HeroSection() {
  const sectionStyle = {
    backgroundImage: 'url("/professional-programmer-1.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    padding: "150px",
    position: "relative",
    borderRadius: "20px",
  };

  const overlayStyle = {
    content: '""',
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    backgroundColor: "(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))",
    borderRadius: "20px",
    zIndex: -1,
  };
  return (
    <div className="container" style={sectionStyle}>
      <div className="row">
        <div className="center-content">
          <h1 className="main-header">About IzIntern</h1>
          <p>
            IzIntern offers dynamic internship programs to students seeking
            hands-on experience in their chosen fields. Our carefully crafted
            internships provide valuable learning opportunities, mentorship, and
            exposure to real-world scenarios. We aim to bridge the gap between
            academic learning and professional practice, equipping students with
            the skills and knowledge needed to succeed in the competitive job
            market.
          </p>
        </div>
      </div>
      <div style={overlayStyle}></div>
    </div>
  );
}

export default HeroSection;
