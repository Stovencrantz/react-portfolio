import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import maineLandscape from "../../images/Maine-landscape.jpeg";
import AboutMe from "../AboutMe";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBLink,
  MDBIcon
} from "mdbreact";
import "./style.css";

function Home() {
  const [isCollapsed, setIsCollapsed] = useState({ collapsed: false });

  function handleTogglerClick() {
    setIsCollapsed({
      collapsed: !isCollapsed.collapsed,
    });
  }


  const navStyle = { marginTop: "4rem" };
  const overlay = (
    <div
      id="sidenav-overlay"
      style={{ backgroundColor: "transparent" }}
      onClick={handleTogglerClick}
    />
  );

  const { collapsed } = isCollapsed;
  return (
    <div id="Home">
      <MDBView src={maineLandscape} fixed>
        <MDBMask overlay="stylish-strong" />
        <MDBContainer
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%", width: "100%", paddingTop: "15rem" }}
        >
          <MDBRow>
            <MDBCol md="12" className="mb-4  text-center">
              {/* <h1 className="black-text display-3 mb-0 pt-md-5 pt-5 font-weight-bold ">
                Steve
                <span className="teal-text font-weight-bold"> Knapp</span>
              </h1> */}
              <p className="grey-text mb-0 h2t-md-5 pt-5 font-weight-bold" style={{fontSize: "38px"}}>
                Welcome! My name is<span className="vibesFont" style={{fontSize: "64px", color: "teal"}}> Steve Knapp </span> 
                and I am a full-stack web developer.
              </p>
              <hr className="hr-light my-4" />
              {/* <h3 className="text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 font-weight-bold" style={{color: "navy"}}>
                SOFTWARE DEVELOPER
              </h3> */}
              <MDBLink to="/aboutme">
                <MDBBtn className="btn-indigo" size="lg">
                  Learn About Me 
                  <span> <MDBIcon far icon="arrow-alt-circle-right" /></span>
                </MDBBtn>
              </MDBLink>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
}

export default Home;
