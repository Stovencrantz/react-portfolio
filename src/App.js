import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home/Home";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FormspreeProvider } from "@formspree/react";
import NavigationContext from "./context/navigationContex";

function App() {

  const [ navTabContext, setNavTabContext ] = useState({ activeNav: "" });


  return (
    <Router>
      <FormspreeProvider project="{react-portfolio}">
        <NavigationContext.Provider value={{navTabContext, setNavTabContext}}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path={["/", "/react-portfolio"]} component={Home} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route exact path="/contactme" component={ContactMe} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
        </NavigationContext.Provider>
      </FormspreeProvider>
    </Router>
  );
}

export default App;
