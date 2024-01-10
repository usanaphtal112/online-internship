import React from "react";

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
    // Add more process needed
  ];
  return (
    <div className="container">
      {/* <h1>How It Works</h1> */}
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4 main-header">How It Works</h1>
          <div className="row">
            {applicationprocess.map((applicationproc) => (
              <div key={applicationproc.name} className="col-md-4">
                <div className="card card-with-gradient">
                  <img
                    src={applicationproc.image}
                    alt={applicationproc.name}
                    className="img-thumbnail"
                  />
                  <div className="card-body text-white">
                    <h5 className="card-title">{applicationproc.name}</h5>
                    <p className="card-text">{applicationproc.description}</p>
                    {/* <button className="btn btn-primary">Learn More</button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default InternshipProcess;
