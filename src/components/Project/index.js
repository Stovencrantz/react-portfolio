import React from "react";
import portrait from "../../images/portrait.jpg"
import mainePortrait from "../../images/Maine-portrait.jpeg"
import maineLandscape from "../../images/Maine-landscape.jpeg"
import Carousel from "../Carousel"
// Hero-team images
import heroPageFight from "../../images/superhero-team/heroPageFight.png"
import heroPageSearch from "../../images/superhero-team/heroPageSearch.png"
import heroPageUniverse from "../../images/superhero-team/heroPageUniverse.png"

// employee-directory images
import mainPage from "../../images/employee-directory/mainPage.PNG"
import headerSort from "../../images/employee-directory/headerSort.PNG"
import searchSort from "../../images/employee-directory/searchSort.PNG"

// fitness-tracker app
import fitnessTrackDashboardPage from "../../images/fitness-tracker/fitnessTrackDashboardPage.png"
import fintessTrackExercisePage from "../../images/fitness-tracker/fitnessTrackExercisePage.png"
import fitnessTrackMainPage from "../../images/fitness-tracker/fitnessTrackMainPage.png"

// budget tracker app
import budgetTrackerActive from "../../images/budget-tracker/Budget-Tracker-Active.png"
import budgetTrackerPWA from "../../images/budget-tracker/Budget-Tracker-PWA.PNG"
import budgetTrackerItems from "../../images/budget-tracker/Budget-Tracker-Items.PNG"


// Note taker app
import noteTakerList from "../../images/note-taker-app/noteTakerList.png"
import noteTakerMain from "../../images/note-taker-app/noteTakerMain.png"
import noteTakerNote from "../../images/note-taker-app/noteTakerNote.png"

// Burger App
import EatDaBurgerAdd from "../../images/burger-app/EatDaBurgerAdd.png"
import EatDaBurgerDevoured from "../../images/burger-app/EatDaBurgerDevoured.png"
import EatDaBurgerMain from "../../images/burger-app/EatDaBurgerMain.png"







import {  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDContainer, MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBContainer } from "mdbreact";

const CarouselTest = () => {
  return (
    <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          My Projects
        </h2>
        <p className="grey-text w-responsive text-center mx-auto mb-5">
          Below are a list of my personal projects and contributions I have made to some github repositories. 
        </p>

    <MDBContainer>
      {/*  Superhero-team Project */}
    <MDBRow>
      {/* Carousel col */}
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <Carousel img={[heroPageSearch, heroPageUniverse, heroPageFight]} />
            
              
            <a href="https://superhero-team.herokuapp.com/" target="_blank">
              <MDBBtn floating  >
                <MDBIcon far icon="file" size="2x" />
              </MDBBtn>
            </a>

            <a href="https://github.com/mvolonnino/superhero_team" target="_blank">
              <MDBBtn tag="a" floating gradient="blue">
                <MDBIcon fab icon="github-square" size="2x" />
              </MDBBtn>
            </a>
            
          </MDBCol>
          {/* total text column */}
          <MDBCol lg="7">
            {/* title text row + col */}
            <MDBRow>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3 text-center">Superhero Smackdown</h5>
                <p className="grey-text">
                  This application is a static super-hero battle simulator built using a model-view-controller design patter and incorporates user authentication, database storage, and third party API's. The application allows the user to search through our API for any of the 700+ superheroes and villain in their collection and see individual descriptions, biographies, and statistics for each character. The user can then choose to add that hero to their specific "Universe" where they can view all of the characters they have saved. From the universe page the user can select a character to face off against a randomly selected villain in a battle to save the universe in a turn-based battle. 
                </p>
                <hr />

              </MDBCol>
            </MDBRow>
            {/* HTML5 row */}
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="html5" size="2x" className = "red-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">HTML5</h5>
                <p className="grey-text">
                  We utilize HTML5 to handle the rendering of the static web pages for this application.
                </p>
              </MDBCol>
            </MDBRow>
            {/* Bootstrap + CSS row */}
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="bootstrap" size="2x" className = "red-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Bootstrap</h5>
                <p className="grey-text">
                  The Bootstrap library was used to handle the majority of the styling with some specific adjustments made using CSS3.
                </p>
              </MDBCol>
            </MDBRow>
            {/* Javascript Row */}
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="js-square" size="2x" className = "red-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">JavaScript</h5>
                <p className="grey-text">
                  Javscript was used to handle all of the dynamic content for our static we pages as well as being responsible for our controller and models. For the back-end I utilized expressJS to coordinate front-end to back-end communication and our third-party API calls.
                </p>
              </MDBCol>
            </MDBRow>
            {/* MySQL row */}
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="database" size="2x" className = "red-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">MySQL & Sequelize</h5>
                <p className="grey-text">
                  We Utilize MySQL to store user authentication information that is hashed using passport and bcryptJS as well as storing the heroes ties to each individual user.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        {/* ============================================= */}
        {/* Employee-directory app */}
        {/* ============================================= */}
        <MDBRow>
          <MDBCol lg="7">
            <MDBRow>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3 text-center">Employee Directory App</h5>
                <p className="grey-text">
                  This application is used to search and sort through a set amount of seeded user data obtained through a third party API. Designed to replicate an employee search directory.  
                </p>
                <hr />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="react" size="2x" className = "cyan-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">React</h5>
                <p className="grey-text">
                  We utilize react to handle a static front-end for the web application.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="mdb" size="2x" className = "cyan-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">MDBReact</h5>
                <p className="grey-text">
                  We incorporate the MDBReact library to handle some front-end css, primarily the main page table by storing our data in an interactive data-table.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5">
            <Carousel img={[mainPage, searchSort, headerSort]} />

            <a href="https://stovencrantz.github.io/employee-directory/" target="_blank">
              <MDBBtn floating  >
                <MDBIcon far icon="file" size="2x" />
              </MDBBtn>
            </a>

            <a href="https://github.com/Stovencrantz/employee-directory" target="_blank">
              <MDBBtn tag="a" floating gradient="blue">
                <MDBIcon fab icon="github-square" size="2x" />
              </MDBBtn>
            </a>

          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        {/* ============================================= */}
        {/* Fitness-tracker app */}
        {/* ============================================= */}
        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <Carousel img={[fitnessTrackMainPage, fintessTrackExercisePage, fitnessTrackDashboardPage]} />

            <a href="https://workout-tracker-sk.herokuapp.com/" target="_blank">
              <MDBBtn floating  >
                <MDBIcon far icon="file" size="2x" />
              </MDBBtn>
            </a>

            <a href="https://github.com/Stovencrantz/Workout-Tracker" target="_blank">
              <MDBBtn tag="a" floating gradient="blue">
                <MDBIcon fab icon="github-square" size="2x" />
              </MDBBtn>
            </a>

          </MDBCol>
          <MDBCol lg="7">
          <MDBRow>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3 text-center">Fitness Tracker App</h5>
                <p className="grey-text">
                  This application is used to search and sort through a set amount of seeded user data obtained through a third party API. Designed to replicate an employee search directory.  
                </p>
                <hr />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="html5" size="2x" className="indigo-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">HTML5</h5>
                <p className="grey-text">
                  We utilize HTML5 to host the static web-pages for this application. Our landing page is where the user enters their exercises for each day, and the user can access the dashboard page which displays all of the users workout statistcs from the past week in graphical and tabular format.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="bootstrap" size="2x" className="pink-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Bootstrap</h5>
                <p className="grey-text">
                  We utilize the Bootstrap library to handle the css styling of our web-page.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="js-square" size="2x" className="blue-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Javascript</h5>
                <p className="grey-text">
                  This application utilizes the model-view-controller pattern along with exrpessJS to take in workout information from the user and store it in a database. We then use mongoose to get and push data from the database to populate our graphs and tables in our dashboard page.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="database" size="2x" className="blue-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Databases</h5>
                <p className="grey-text">
                  For this application we utilized MongoDB and mongoose to handle the storage of data with this application. 
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        {/* ============================================= */}
        {/* budget-tracker app */}
        {/* ============================================= */}
        <MDBRow>
          <MDBCol lg="7">
          <MDBRow>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3 text-center">Budget Tracker App</h5>
                <p className="grey-text">
                  This is a progressive web application (PWA) that allows the user to track debits and expenses and to have a running budget. With this application being a PWA it can be used both online and offline.  
                </p>
                <hr />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="html5" size="2x" className="cyan-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">HTML5</h5>
                <p className="grey-text">
                  We used HTML5 to design the static web pages for this application 
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="bootstrap" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Bootstrap</h5>
                <p className="grey-text">
                  We utilized bootstrap to handle the styling of this application.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="js-square" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Javascript</h5>
                <p className="grey-text">
                  Javacript was utilized to create the dynamic content for this application.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="database" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Database</h5>
                <p className="grey-text">
                  We utilized MongoDB to store our data and utilized mongoose to pass our data back and forth from the fron and back ends.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5">
            <Carousel img={[budgetTrackerPWA, budgetTrackerActive, budgetTrackerItems]} />

            <a href="https://budget-tracker-pwa-sk.herokuapp.com/" target="_blank">
              <MDBBtn floating  >
                <MDBIcon far icon="file" size="2x" />
              </MDBBtn>
            </a>

            <a href="https://github.com/Stovencrantz/Budget-Tracker-PWA" target="_blank">
              <MDBBtn tag="a" floating gradient="blue">
                <MDBIcon fab icon="github-square" size="2x" />
              </MDBBtn>
            </a>
            
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />

        {/* ============================================= */}
        {/* note-taker app */}
        {/* ============================================= */}
        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <Carousel img={[noteTakerMain, noteTakerList, noteTakerNote]} />

            <a href="https://note-taker-app-sknapp.herokuapp.com/" target="_blank">
              <MDBBtn floating  >
                <MDBIcon far icon="file" size="2x" />
              </MDBBtn>
            </a>

            <a href="https://github.com/Stovencrantz/Note-Taker-App" target="_blank">
              <MDBBtn tag="a" floating gradient="blue">
                <MDBIcon fab icon="github-square" size="2x" />
              </MDBBtn>
            </a>

          </MDBCol>
          <MDBCol lg="7">
          <MDBRow>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3 text-center">Note Taker App</h5>
                <p className="grey-text">
                  This application allows the user to take notes, save those notes, and view a list of recent notes to keep track of their activites.
                </p>
                <hr />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="html5" size="2x" className="indigo-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">HTML5</h5>
                <p className="grey-text">
                  We use HTML5 to handle the creation of the static web pages for this application.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="bootstrap" size="2x" className="pink-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Bootstrap</h5>
                <p className="grey-text">
                  We utilized bootstrap to handle the styling of this application.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="js-square" size="2x" className="blue-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Javascript</h5>
                <p className="grey-text">
                  Javascript was utilized to handle the interactivity on the page, including the button events and the form submission. We also used javascript to make the api calls to get, post, and delete data.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        {/* ============================================= */}
        {/* Burger app */}
        {/* ============================================= */}
        <MDBRow>
          <MDBCol lg="7">
          <MDBRow>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3 text-center">Eat-Da-Burger App</h5>
                <p className="grey-text">
                  This application is used to show off the abilities of using a MVC pattern and front-end model software, which in this case is Handlebars. The application functions by the user adding a list of burgers they want to eat, which is on the left hand side. When the user click the "Devour Me" button next to the particular burger, it moved to the "Devoured Burgers" list on the right side, storing all the burgers the user ate.  
                </p>
                <hr />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="html5" size="2x" className="cyan-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Handlebars</h5>
                <p className="grey-text">
                  For this application we handled our static web pages by utilizing the handlebars tempating language. 
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="bootstrap" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Bootstrap</h5>
                <p className="grey-text">
                  We utilized bootstrap to handle the styling of our application.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon fab icon="js-square" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Javascript</h5>
                <p className="grey-text">
                  We used javascript to handle the dynamic content of our webpage and to integrate with handlebars to render our specified html components to the page.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="database" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Database</h5>
                <p className="grey-text">
                  For this application we utilized MySQL to store our hamburger data and incorporated queries to add and remove burgers from our database. 
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5">
            <Carousel img={[EatDaBurgerMain, EatDaBurgerAdd, EatDaBurgerDevoured]} />
      
            <a href="https://handlebars-burger-app-knapp.herokuapp.com/" target="_blank">
              <MDBBtn floating  >
                <MDBIcon far icon="file" size="2x" />
              </MDBBtn>
            </a>

            <a href="https://github.com/Stovencrantz/Burger-App" target="_blank">
              <MDBBtn tag="a" floating gradient="blue">
                <MDBIcon fab icon="github-square" size="2x" />
              </MDBBtn>
            </a>

          </MDBCol>
        </MDBRow>
    </MDBContainer>
      </section>
  );
}

export default CarouselTest;