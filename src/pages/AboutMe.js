import React, { useContext, useEffect } from 'react';
import Jumbotron from "../components/Jumbotron"
import { MDBView, MDBMask,  MDBContainer, MDBRow, MDBCol } from "mdbreact";
import aboutMeBackground from '../images/aboutMeBackground.jpg';
import NavigationContext from "../context/navigationContex"



function AboutMe() {
  const { navTabContext, setNavTabContext } = useContext(NavigationContext); 
  useEffect(() => {
    setNavTabContext({ activeNav: window.location.pathname })
    console.log("useeffect activated: ", navTabContext.activeNav)

  }, [])

  return (
    <>
      <h1 className="vibesFont pt-5 ml-5 text-left" style={{fontWeight: "bold", fontSize: "5rem"}}>About Me</h1>

      <MDBContainer className='d-flex justify-content-center align-items-center'
        style={{ paddingTop: '5rem'}}>
          <Jumbotron />
      </MDBContainer>
    </>
  )
}

export default AboutMe;