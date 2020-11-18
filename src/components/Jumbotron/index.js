import React from "react";
import mainePortrait from "../../images/Maine-portrait.jpeg";
import portrait from "../../images/portrait.jpg";
import "./style.css";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBMask,
  MDBView,
} from "mdbreact";

const Jumbotron = () => {
  const skillsArr = [
    { tech: "HTML",
      icon: <MDBIcon fab icon="html5" size="3x"/> },
    { tech: "CSS",
      icon: <MDBIcon fab icon="css3-alt" size="3x"/> },
    { tech: "JavaScript",
      icon: <MDBIcon fab icon="js-square"size="3x" /> },
    { tech: "NodeJS",
      icon: <MDBIcon fab icon="node-js" size="3x"/> },
    { tech: "Express",
      icon: <MDBIcon icon="server" size="3x"/> },
    { tech: "MySQL",
      icon: <MDBIcon icon="database" size="3x"/> },
    { tech: "MongoDB",
      icon: <MDBIcon icon="database" size="3x"/> },
    { tech: "React",
      icon: <MDBIcon fab icon="react" size="3x"/> }
  ];
  return (
    <div style={{ height: "85vh" }}>
      <MDBRow className="mb-4">
        <MDBCol className="">
          {/* Image here */}
          <img
            src={portrait}
            className="img-thumbnail float-right"
            alt="personal_headshot"
          />
        </MDBCol>
        <MDBCol>
          {/* Card text here */}
          <h1 className="text-left" style={{ fontWeight: "bold" }}>
            Hey,
          </h1>
          <h1 className="text-left" style={{ fontWeight: "bold" }}>
            I'm Steve!
          </h1>
          <p className="text-left">
            {" "}
            I am a <strong>full-stack web developer</strong> working with static
            and progressive web applications with a focus on utilizing the
            ReactJS framework. I have previous experience working in the
            manufacturing engineering and environmental sectors and am looking
            to integrate my professional background with my software-development
            skillset to bring innovative solutions to the tech industry. In my
            spare time I am an avid outdoorsman and can often be found
            fly-fishing a stream or hiking in the mountains. A little fun fact
            about me is that one of my greatest goals in life is to complete the
            High-Point Challenge which is to summit the tallest peak of every US
            state. I see myself as an explorer in all my ventures and have found
            that trait has translated well into my software-developer career.
            Everyday is a new journey with new mysteries to solve, each with
            various methods of solving.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        {/* Further info here */}
        <h1 className="vibesFont" style={{fontSize: "5rem", fontWeight: "bold"}}>Tech Stack:</h1>
        <MDBRow>
        {skillsArr.map((skill, index) => {
          return (
            <MDBCol key="index">
              {skill.icon}
              <p style={{fontSize: "2rem"}}>{skill.tech}</p>
            </MDBCol>
          );
        })}
        </MDBRow>
      </MDBRow>
    </div>
  );
};

export default Jumbotron;
