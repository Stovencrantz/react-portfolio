import React from "react";
import mainePortrait from '../../images/Maine-portrait.jpeg'
import portrait from "../../images/portrait.jpg"
import "./style.css";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from "mdbreact";


const Jumbotron = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }} >
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBRow >
                <MDBCol >
                  <MDBCard className="portraitCard">
                    <MDBCardImage className="img-thumbnail myImage" src={portrait} />
                  </MDBCard>
                </MDBCol>
                <MDBCol >
                  <MDBCard className="textCard">
                    <MDBCardBody>
                      <MDBCardText>
                        <strong>Welcome!</strong> Thank you for visiting my personal portfolio site, please allow me to introduce myself. My name is Steve Knapp and I am a software developer that specialized in front-end and back-end web technologies. 
                        <hr />
                        I have previous experience working in the manufacturing engineering and environmental sectors and am looking to transition into a full time software developer career. 
                        <hr />
                        In my spare time I am an avid fisherman and can often be found somewhere on a lake or hiking in the mountains. I see myself as an explorer in all my ventures and have found that trait has translated well into my software-developer career. The breadth of technologies is vast and I find it an exciting world with endless possibilities.
                      </MDBCardText>    
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Jumbotron;