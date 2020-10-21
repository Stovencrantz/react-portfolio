import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBLink } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Portfolio</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Directory</h5>
            <ul>
              <li className="list-unstyled">
                <MDBLink to="/aboutme">About Me</MDBLink>
              </li>
              <li className="list-unstyled">
                <MDBLink to="/projects">Projects</MDBLink>
              </li>
              <li className="list-unstyled">
                <MDBLink to="/contactme">Contact Me</MDBLink>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;