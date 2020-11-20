
import React, { useContext, useEffect } from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput, MDBCard, MDBCardHeader, MDBCardImage, MDBLink } from "mdbreact";
import Form from "../components/Form"
import ResumeImg from "../images/resume/resumeImg.png"
import NavigationContext from "../context/navigationContex"


const ContactMe = () => {
  const { navTabContext, setNavTabContext } = useContext(NavigationContext); 
  useEffect(() => {
    setNavTabContext({ activeNav: window.location.pathname })
    console.log("useeffect activated: ", navTabContext.activeNav)

    // setActivePill({ activeItemPill: window.location.pathname})

  }, [])

  return (
    <MDBContainer style={{ minHeight: "100vh"}}>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact me
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        If you wish to contact me for any career opportunities, project contributions, or if you wish to contribute to one of my projects, please use the form below!
      </p>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <Form />
        </MDBCol>
        <MDBCol md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              <p>Toms River, NJ 08753, USA</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              <p>+ 01 732-773-9374</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p>sknapp1493@gmail.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        {/* ENter resume here */}
        <MDBCard>
        <MDBCard className="resumeCard">
          <MDBCardHeader><strong>My Resume</strong></MDBCardHeader>
            <a href="https://drive.google.com/file/d/1DXL8rzVsSYqRHtXmMeilKwOG6PiqYWz_/view?usp=sharing" target="_blank">
               <MDBCardImage className="img-thumbnail myImage" src={ResumeImg} />
              </a>
            </MDBCard>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default ContactMe;