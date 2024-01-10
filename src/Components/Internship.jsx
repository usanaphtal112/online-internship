import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Internship = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animateOnScroll();
    }
  }, [inView]);

  const animateOnScroll = () => {
    // Add class to apply animation on scroll
    document
      .querySelector(".programs-container")
      .classList.add("animate-scroll");
  };

  const handleMouseOver = (index) => {
    // Add class to apply mouse-over animation
    document
      .querySelector(`.program-${index}`)
      .classList.add("animate-mouseover");
  };

  const handleMouseOut = (index) => {
    // Remove class when mouse leaves
    document
      .querySelector(`.program-${index}`)
      .classList.remove("animate-mouseover");
  };
  return (
    <div className="container">
      <h1 className="main-header">Our Internship Programs</h1>

      <div className="split-layout">
        <div className="image-container">
          <img src="/side-intern.png" alt="Internship Programs Image" />
        </div>

        <div className="programs-container" ref={ref}>
          <div
            className="program"
            onMouseOver={() => handleMouseOver(1)}
            onMouseOut={() => handleMouseOut(1)}
          >
            <div className="number">1</div>
            <div className="line-vertical"></div>
            <div className="line-horizontal"></div>
            <div className="content">
              <h2 className="main-header">Industry-Focused</h2>
              <p>
                Our internship programs are tailored to different industries,
                allowing students to gain specialized knowledge and skills
                relevant to their career aspirations.
              </p>
            </div>
          </div>

          <div className="program">
            <div className="number">2</div>
            <div className="line-vertical"></div>
            <div className="line-horizontal"></div>
            <div className="content">
              <h2 className="main-header">Mentorship & Support</h2>
              <p>
                We provide dedicated mentorship to guide and support interns
                throughout their program, ensuring a nurturing environment for
                growth and development.
              </p>
            </div>
          </div>

          <div className="program">
            <div className="number">3</div>
            <div className="line-vertical"></div>
            <div className="line-horizontal"></div>
            <div className="content">
              <h2 className="main-header">Real-World Experience</h2>
              <p>
                Interns are exposed to real industry challenges, projects, and
                responsibilities, enabling them to apply their academic learning
                in practical settings.
              </p>
            </div>
          </div>
          <div className="program">
            <div className="number">4</div>
            <div className="line-vertical"></div>
            <div className="line-horizontal"></div>
            <div className="content">
              <h2 className="main-header">Learning New Skills</h2>
              <p>
                Our programs offer opportunities for interns to learn new skills
                that are valuable in today's dynamic job market.
              </p>
            </div>
          </div>

          <div className="program">
            <div className="number">5</div>
            <div className="line-vertical"></div>
            <div className="line-horizontal"></div>
            <div className="content">
              <h2 className="main-header">AI & DS Workshops</h2>
              <p>
                Explore the fascinating world of Artificial Intelligence and
                Data Science through engaging and hands-on workshops.
              </p>
            </div>
          </div>
          <div className="program">
            <div className="number">6</div>
            <div className="line-vertical"></div>
            <div className="line-horizontal"></div>
            <div className="content">
              <h2 className="main-header">Learning New Skills</h2>
              <p>
                Our programs offer opportunities for interns to learn new skills
                that are valuable in today's dynamic job market.
              </p>
            </div>
          </div>

          <div className="program">
            <div className="number">7</div>
            <div className="line-vertical"></div>
            <div className="line-horizontal"></div>
            <div className="content">
              <h2 className="main-header">AI & DS Workshops</h2>
              <p>
                Explore the fascinating world of Artificial Intelligence and
                Data Science through engaging and hands-on workshops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
