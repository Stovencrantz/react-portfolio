import React from "react";
import mainePortrait from "../../images/Maine-portrait.jpeg";
import portrait from "../../images/portrait.jpg";
import "./style.css";
import projectMgmtIcon from "../../images/skillsIcons/projectMgmt.png";
import innovationIcon from "../../images/skillsIcons/innovation.png";
import clientRelationsIcon from "../../images/skillsIcons/clientRelations.png";
import responsiveDesignIcon from "../../images/skillsIcons/responsiveDesign.png";
import mobileFirstIcon from "../../images/skillsIcons/mobileFirst.png";
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
    { tech: "HTML", icon: <MDBIcon fab icon="html5" size="3x" /> },
    { tech: "CSS", icon: <MDBIcon fab icon="css3-alt" size="3x" /> },
    { tech: "JavaScript", icon: <MDBIcon fab icon="js-square" size="3x" /> },
    { tech: "NodeJS", icon: <MDBIcon fab icon="node-js" size="3x" /> },
    { tech: "Express", icon: <MDBIcon icon="server" size="3x" /> },
    { tech: "MySQL", icon: <MDBIcon icon="database" size="3x" /> },
    { tech: "MongoDB", icon: <MDBIcon icon="database" size="3x" /> },
    { tech: "React", icon: <MDBIcon fab icon="react" size="3x" /> },
    { tech: "Wordpress", icon: <MDBIcon fab icon="wordpress" size="3x" /> },
  ];
  return (
    <div>
      <MDBRow className="mb-4">
        <MDBCol className="">
          {/* =============================================================== */}
          {/* Image here */}
          {/* =============================================================== */}
          <img
            src={portrait}
            className="img-thumbnail float-right"
            alt="personal_headshot"
          />
        </MDBCol>
        <MDBCol>
          {/* =============================================================== */}
          {/* Card text here */}
          {/* =============================================================== */}

          <h1 className="text-left" style={{ fontWeight: "bold" }}>
            <i>Hey,</i>
          </h1>
          <h1 className="text-left" style={{ fontWeight: "bold" }}>
            <i>I'm Steve!</i>
          </h1>
          <p className="text-left">
            {" "}
            I am a <strong style={{color: "black"}}><i>full-stack web developer</i></strong> working with static
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
      <MDBRow className="mt-5">
        {/* =============================================================== */}
        {/* Further info here */}
        {/* =============================================================== */}

        <h1
          className="vibesFont"
          style={{ fontSize: "5rem", fontWeight: "bold" }}
        >
          Tech Stack:
        </h1>
        <MDBRow className="my-3">
          {skillsArr.map((skill, index) => {
            return (
              <MDBCol key="index">
                {skill.icon}
                <p style={{ fontSize: "2rem", color: "black" }}>{skill.tech}</p>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBRow>
      <MDBRow className="my-3">
        <MDBCol>
          <h1
            className="text-center vibesFont"
            style={{ fontSize: "3rem", fontWeight: "bold" }}
          >
            Professional Skillset:
          </h1>
          {/* =============================================================== */}
          {/* Project management skill */}
          {/* =============================================================== */}

          <MDBRow className="align-items-center justify-items-center">
            <MDBCol className="col-3">
              <img
                className="iconImg"
                src={projectMgmtIcon}
                alt="project management icon"
              />
            </MDBCol>
            <MDBCol className="col-9">
              <h2 className="text-left" style={{ fontWeight: "400" }}>
                Project Mangagement
              </h2>
              <p className="text-left">
                Spearheading the management of project at all stages from bid to
                completion, executing each individual stage efficiently and
                satisfactory within deadlines.
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          {/* =============================================================== */}
          {/* Innovation skill */}
          {/* =============================================================== */}

          <MDBRow className="align-items-center justify-items-center">
            <MDBCol className="col-3">
              <img
                className="iconImg"
                src={innovationIcon}
                alt="project management icon"
              />
            </MDBCol>
            <MDBCol className="col-9">
              <h2 className="text-left">Innovation</h2>
              <p className="text-left">
                Successfully implementing out of the box ideas into current
                production schema with a demonstratable improvement in quality
                of life, improved efficiency, reduced production time, and
                reduced costs.
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          {/* =============================================================== */}
          {/* Client Relations skill */}
          {/* =============================================================== */}

          <MDBRow className="align-items-center justify-items-center">
            <MDBCol className="col-3">
              <img
                className="iconImg"
                src={clientRelationsIcon}
                alt="project management icon"
              />
            </MDBCol>
            <MDBCol className="col-9">
              <h2 className="text-left">Client Relations</h2>
              <p className="text-left">
                Able to work directly with clients and work with them to achieve
                their desired product within constrained deadlines.{" "}
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          {/* =============================================================== */}
          {/* Responsive Design skill */}
          {/* =============================================================== */}

          <MDBRow className="align-items-center justify-items-center">
            <MDBCol className="col-3">
              <img
                className="iconImg"
                src={responsiveDesignIcon}
                alt="project management icon"
              />
            </MDBCol>
            <MDBCol className="col-9">
              <h2 className="text-left">Responsive Design</h2>
              <p className="text-left">
                Designing dynamic applications that will adapt to the needs of
                the client and their users in real time.
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          {/* =============================================================== */}
          {/* Mobile First Development skill */}
          {/* =============================================================== */}

          <MDBRow className="align-items-center justify-items-center">
            <MDBCol className="col-3">
              <img
                className="iconImg"
                src={mobileFirstIcon}
                alt="project management icon"
              />
            </MDBCol>
            <MDBCol className="col-9">
              <h2 className="text-left">Mobile First Applications</h2>
              <p className="text-left">
                Priority in designing applications to support a wide range of
                mobile devices as well as desktops to provide a greater range of
                service to the client.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Jumbotron;
