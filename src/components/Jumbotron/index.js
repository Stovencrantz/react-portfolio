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
  return (
    // <MDBView className="jumbotronView">

      <MDBJumbotron className="aboutMeJumbo shadow-box-example z-depth-5"
        // style={{
        //   backgroundColor: "white",
        //   borderRadius: "50px",
        //   borderStyle: "solid",
        //   borderColor: "#ac7339",
        
        // }}
      >
        {/* <MDBMask  overlay="grey-strong"/> */}
        <MDBRow className=" text-center ">
          <MDBCol>
            <MDBCard className="portraitCard">
              <MDBCardImage className="img-thumbnail myImage" src={portrait} />
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="textCard">
              <MDBCardBody>
                <MDBCardText>
                  <strong>Welcome!</strong> Thank you for visiting my personal
                  portfolio site, please allow me to introduce myself. My name
                  is Steve Knapp and I am a software developer with experience in full-stack web applications.
                </MDBCardText>
                <hr />
                <MDBCardText>
                  I have previous experience working in the manufacturing
                  engineering and environmental sectors and am looking to
                  transition into a full time software developer career.
                </MDBCardText>
                <hr />
                <MDBCardText>
                  In my spare time I am an avid fisherman and can often be found
                  somewhere on a lake or hiking in the mountains. I see myself
                  as an explorer in all my ventures and have found that trait
                  has translated well into my software-developer career. The
                  breadth of technologies is vast and I find it an exciting
                  world with endless possibilities.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center align-items-center mt-3">
          <MDBCard>
            <MDBCardText>
              Hello World
            </MDBCardText>
          </MDBCard>
        </MDBRow>
      </MDBJumbotron>
      // </MDBView>

  );
};

export default Jumbotron;
