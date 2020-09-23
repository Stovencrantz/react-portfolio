import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/Jumbotron"
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import MyProjects from "./pages/MyProjects"
import AboutMe from "./pages/AboutMe"
import ContactMe from "./pages/ContactMe"
import Home from "./pages/Home/Home"
import NoMatch from "./pages/NoMatch"
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';


function App() {
  return (
    <Router>

      <div className="App">

        <Navbar />

          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/projects" component={MyProjects} />
          <Route exact path="/contactme" component={ContactMe} />
          <Route exact path="*" component={NoMatch} />

          </Switch>


        <Footer />
      </div>
    </Router>

  );
}

export default App;
