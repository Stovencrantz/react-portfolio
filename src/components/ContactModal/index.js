import React, { useState } from "react";
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn} from "mdbreact";

export default function ContactModal() {

    const [state, setState] = useState(true);
    console.log("state value on init: ", state);
  return (
    <MDBModal isOpen={state}  size="sm" centered>
      <MDBModalBody>
        Thank you very much for reaching out to me, I will do my best to respond to your message within the next few business days. I look forward to our communication together.
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" size="sm" onClick={() => {setState(!state)}}>
          Close
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
}
