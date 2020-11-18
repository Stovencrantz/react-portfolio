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
    // setActivePill({ activeItemPill: window.location.pathname})

  }, [])

  return (
        //   <div id='aboutMe'>
        //   <MDBView
        //     src={aboutMeBackground}
        //     fixed
        //   >
        //     <MDBMask className='rgba-white-light' />
        //     <MDBContainer
        //       className='d-flex justify-content-center align-items-center'
        //       style={{ paddingTop: '10rem'}}
        //     >
        //           <Jumbotron />
        //     </MDBContainer>
        //   </MDBView>
        // </div>
    <>
      <div className="vibesFont pt-5 ml-5 text-left" style={{fontWeight: "strong", fontSize: "5rem"}}>About Me</div>

      <MDBContainer className='d-flex justify-content-center align-items-center'
        style={{ paddingTop: '5rem'}}>
          <Jumbotron />
      </MDBContainer>
    </>
  )
}

export default AboutMe;