import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBIcon,
  MDBTabPane,
  MDBTabContent,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import NavigationContext from "../../context/navigationContex";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";

function NavbarPage() {
  const { navTabContext, setNavTabContext } = useContext(NavigationContext);
  const [collapse, setCollapse] = useState({ isOpen: false });

  const toggleCollapse = () => {
    setCollapse({ isOpen: !collapse.isOpen });
    console.log("Navbar toggle status: ", collapse.isOpen);
  };

  return (
    <MDBNavbar color="default-color" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Portfolio</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse isOpen={collapse.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem
            className="tab tabId-1"
            active={navTabContext.activeNav === "/"}
          >
            <MDBLink to="/">Home</MDBLink>
          </MDBNavItem>
          <MDBNavItem
            className="tab tabId-2"
            active={navTabContext.activeNav === "/aboutme"}
          >
            <MDBLink to="/aboutme">About Me</MDBLink>
          </MDBNavItem>
          <MDBNavItem
            className="tab tabId-3"
            active={navTabContext.activeNav === "/projects"}
          >
            <MDBLink to="/projects">Projects</MDBLink>
          </MDBNavItem>
          <MDBNavItem
            className="tab tabId-4"
            active={navTabContext.activeNav === "/contactme"}
          >
            <MDBLink to="/contactme">Contact Me</MDBLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem className="waves-effect waves-light px-3">
            <a
              href="https://www.linkedin.com/in/steven-knapp-0b524a81/"
              target="_blank"
            >
              <MDBIcon fab icon="linkedin" size="lg" className="white-text" />
            </a>
          </MDBNavItem>

          <MDBNavItem className="waves-effect waves-light px-3">
            <a
              href="https://github.com/Stovencrantz?tab=repositories"
              target="_blank"
            >
              <MDBIcon fab icon="github" size="lg" className="white-text" />
            </a>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}

export default NavbarPage;
