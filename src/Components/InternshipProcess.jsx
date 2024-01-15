import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

function ProcessCard({ name, image, description }) {
  const [ref, inView] = useInView(); // Remove triggerOnce: true

  // Use react-spring's useSpring hook to animate sliding from the bottom
  const slideAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(100%)",
    config: config.gentle,
  });

  return (
    <animated.div className="col-md-4" ref={ref} style={slideAnimation}>
      <div className="card card-with-gradient">
        <img src={image} alt={name} className="img-thumbnail" />
        <div className="card-body text-white">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          {/* <button className="btn btn-primary">Learn More</button> */}
        </div>
      </div>
    </animated.div>
  );
}

function InternshipProcess() {
  const applicationprocess = [
    {
      name: "Application & Selection",
      image: "/service-1-oi.png",
      description:
        "Students apply for our programs, and our team meticulously selects candidates based on their skills, passion, and potential.",
    },
    {
      name: "Mentorship Structure",
      image: "/service-2-oi.png",
      description:
        "We have a structured mentorship system in place, where interns receive personalized guidance from industry experts and professionals.",
    },
    {
      name: "Learning Journey",
      image: "/service-3-oi.png",
      description:
        "Interns embark on a journey of learning, skill development, and growing their professional network through various engaging activities and projects.",
    },
    // Add more process steps as needed
  ];

  return (
    <div className="container">
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4 main-header">How It Works</h1>
          <div className="row">
            {applicationprocess.map((applicationproc) => (
              <ProcessCard
                key={applicationproc.name}
                name={applicationproc.name}
                image={applicationproc.image}
                description={applicationproc.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default InternshipProcess;
