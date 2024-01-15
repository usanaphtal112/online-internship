import React from "react";
import { useSpring, animated } from "react-spring";

function HeroSection() {
  const sectionStyle = {
    backgroundImage: 'url("/professional-programmer-1.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    padding: "80px", // Adjust padding for smaller screens
    position: "relative",
    borderRadius: "20px",
  };

  // Use react-spring's useSpring hook to animate the opacity
  const textAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }, // Adjust the duration as needed
  });

  // Use react-spring's useSpring hook to create a subtle parallax effect
  const parallaxAnimation = useSpring({
    from: { transform: "translateY(50px)" },
    to: { transform: "translateY(0)" },
    config: { tension: 20, friction: 8 }, // Adjust tension and friction for desired effect
  });

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
    <animated.div
      className="container"
      style={{ ...sectionStyle, ...parallaxAnimation }}
    >
      <div className="row">
        <animated.div className="center-content" style={textAnimation}>
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
        </animated.div>
      </div>
      <div style={overlayStyle}></div>
    </animated.div>
  );
}

export default HeroSection;
