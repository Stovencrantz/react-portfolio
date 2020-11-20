import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBLink } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title vibesFont" style={{fontSize: "2rem"}}>Portfolio</h5>
            <p>
              Welcome to my portfolio, please feel free to look around! 
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title vibesFont" style={{fontSize: "2rem"}}>Directory</h5>
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
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
          

        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;