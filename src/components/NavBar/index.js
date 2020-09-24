import React, { useState } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBIcon, MDBTabPane, MDBTabContent } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';


function NavbarPage () {

const [activePill, setActivePill] = useState({activeItemPill: "1"});

// function togglePills () { 
//   return tab => () => {
//     if (activePill !== tab) {
//       return setActivePill({
//         activeItemPill: tab
//       })
//     }
//   }
// }

function togglePills (tab) { 
  if (activePill.activeItemPill !== tab) {
    setActivePill({
      activeItemPill: tab
    })
  }
  console.log("activePill: ", activePill.activeItemPill)

  console.log("tab: ", tab)

}

  return (
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Portfolio</strong>
        </MDBNavbarBrand>
          <MDBNavbarNav left>
            <MDBNavItem  className="tab tabId-1" active={activePill.activeItemPill === "1"} onClick={() => togglePills("1")} >
              <MDBLink to="/" >Home</MDBLink>
            </MDBNavItem>
            <MDBNavItem  className="tab tabId-2" active={activePill.activeItemPill === "2"} onClick={() => togglePills("2")} >
              <MDBLink to="/aboutme" >About Me</MDBLink>
            </MDBNavItem>
            <MDBNavItem  className="tab tabId-3" active={activePill.activeItemPill === "3"} onClick={() => togglePills("3")}>
              <MDBLink to="/projects" >Projects</MDBLink>
            </MDBNavItem>
            <MDBNavItem  className="tab tabId-4" active={activePill.activeItemPill === "4"} onClick={() => togglePills("4")}>
              <MDBLink to="/contactme" >Contact Me</MDBLink>
            </MDBNavItem>

          </MDBNavbarNav>
          <MDBNavbarNav right>

            <MDBNavItem>
              <MDBNavItem className="waves-effect waves-light" >
                <a href="https://github.com/Stovencrantz?tab=repositories" target="_blank"> 
                    <MDBIcon fab icon="github" size = "lg" className="white-text" />
                </a>
              </MDBNavItem>
            </MDBNavItem>
            <MDBNavItem>

            </MDBNavItem>
          </MDBNavbarNav>
      </MDBNavbar>
    );
  }


export default NavbarPage;