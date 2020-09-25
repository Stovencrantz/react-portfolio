
import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactMe = () => {
  return (
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact me
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        If you wish to contact me for any career opportunities, project contributions, or if you wish to contribute to one of my projects, please use the form below!
      </p>
      <MDBRow>
        <MDBCol md="12" className="md-0 mb-5">
          <form action="mailto:sknapp143gmail.com" method="POST" encType="text/plain">
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="Your name" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact-email"
                    label="Your email"
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Subject" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <div className="text-center text-md-left">
              <MDBBtn type="submit" color="primary" size="md">
                Send
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ContactMe;