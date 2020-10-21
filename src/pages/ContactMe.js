
import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import Form from "../components/Form"

const ContactMe = () => {
  return (
    <MDBContainer style={{ height: "100vh"}}>
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
    </MDBContainer>
  );
}

export default ContactMe;