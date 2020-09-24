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
                  <MDBCard>
                    <MDBCardImage className="img-thumbnail myImage" src={portrait} />
                  </MDBCard>
                </MDBCol>
                <MDBCol >
                  <MDBCard >
                    <MDBCardBody>
                      <MDBCardText>
                        Here we will put some paragraph text
                        Here we will put some paragraph text
                        Here we will put some paragraph text
                        Here we will put some paragraph text
                        Here we will put some paragraph text
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