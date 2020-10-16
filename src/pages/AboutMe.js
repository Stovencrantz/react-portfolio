import React from 'react';
import Jumbotron from "../components/Jumbotron"
import { MDBView, MDBMask,  MDBContainer, MDBRow, MDBCol } from "mdbreact";
import aboutMeBackground from '../images/aboutMeBackground.jpg';



function AboutMe() {
  return (
          <div id='aboutMe'>
          <MDBView
            src={aboutMeBackground}
            fixed
          >
            <MDBMask className='rgba-white-light' />
            <MDBContainer
              className='d-flex justify-content-center align-items-center'
              style={{ height: '100%', width: '100%', paddingTop: '15rem' }}
            >
              <MDBRow className= 'text-center'>
                  <Jumbotron />
              </MDBRow>
            </MDBContainer>
          </MDBView>
        </div>
  )
}

export default AboutMe;