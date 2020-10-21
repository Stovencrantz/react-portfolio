import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import ContactModal from "../../components/ContactModal";

export default function Form() {
  const [status, setStatus] = useState({ status: "" });

  console.log("Our status is: ", status.status);

  function submitForm(ev) {
    ev.preventDefault();
    console.log("inside submitForm function status: ", status.status);
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus({ status: "SUCCESS" });
        console.log("status", status.status);
      } else {
        setStatus({ status: "ERROR" });
        console.log("status: ", status);
      }
    };
    xhr.send(data);
  }

  return (
    <form
      id="my-form"
      onSubmit={submitForm}
      action="https://formspree.io/f/mleobjzd"
      method="POST"
      encType="multiport/form-data"
      target="_blank"
    >
      <MDBRow>
        <MDBCol md="6">
          <div className="md-form mb-0">
            <MDBInput
              type="text"
              id="contact-name"
              label="Your name"
              name="name"
            />
          </div>
        </MDBCol>
        <MDBCol md="6">
          <div className="md-form mb-0">
            <MDBInput
              type="email"
              id="contact-email"
              label="Your email"
              name="email"
            />
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12">
          <div className="md-form mb-0">
            <MDBInput
              type="text"
              id="contact-subject"
              label="Subject"
              name="subject"
            />
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
              name="message"
            />
          </div>
        </MDBCol>
      </MDBRow>
      {status.status === "SUCCESS" ? (
        <ContactModal />
      ) : (
        <div className="text-center text-md-left">
          <MDBBtn type="submit" color="primary" size="md">
            Send
          </MDBBtn>
        </div>
      )}
      {status.status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
  );
}
