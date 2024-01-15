import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

const Program = ({ number, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Use react-spring's useSpring hook to animate sliding from the right
  const slideAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(100%)",
    config: config.gentle, // Adjust the config for a more pronounced effect
  });

  return (
    <animated.div className="program" ref={ref} style={slideAnimation}>
      <div className="number">{number}</div>
      <div className="line-vertical"></div>
      <div className="line-horizontal"></div>
      <div className="content">
        <h2 className="main-header">{title}</h2>
        <p>{description}</p>
      </div>
    </animated.div>
  );
};

const Internship = () => {
  return (
    <div className="container">
      <h1 className="main-header">Our Internship Programs</h1>

      <div className="split-layout">
        {/* Hide the image on mobile devices (screen width less than or equal to 768px) */}
        <div className="image-container d-none d-md-block">
          <img src="/side-intern.png" alt="Internship Programs Image" />
        </div>

        <div className="programs-container">
          <Program
            number="1"
            title="Industry-Focused"
            description="Our internship programs are tailored to different industries, allowing students to gain specialized knowledge and skills relevant to their career aspirations."
          />

          <Program
            number="2"
            title="Mentorship & Support"
            description="We provide dedicated mentorship to guide and support interns throughout their program, ensuring a nurturing environment for growth and development."
          />

          <Program
            number="3"
            title="Real-World Experience"
            description=" Interns are exposed to real industry challenges, projects, and
            responsibilities, enabling them to apply their academic learning
            in practical settings."
          />

          <Program
            number="4"
            title="Learning New Skills"
            description="Our programs offer opportunities for interns to learn new skills
            that are valuable in today's dynamic job market."
          />

          <Program
            number="5"
            title="AI & DS Workshops"
            description=" Explore the fascinating world of Artificial Intelligence and
            Data Science through engaging and hands-on workshops."
          />

          <Program
            number="6"
            title="Learning New Skills"
            description="Our programs offer opportunities for interns to learn new skills
            that are valuable in today's dynamic job market."
          />

          <Program
            number="7"
            title="AI & DS Workshops"
            description="Explore the fascinating world of Artificial Intelligence and
            Data Science through engaging and hands-on workshops."
          />

          {/* Repeat the same for other programs */}
        </div>
      </div>
    </div>
  );
};

export default Internship;
