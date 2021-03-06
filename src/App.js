import React from "react";
import "./App.css";
import PrivacyPolicy from "./views/PrivacyPolicy/PrivacyPolicy";
import AboutUs from "./views/About/AboutUs";
import Header from "./components/header/header";
import Contact from "./views/Contact/Contact";
import Career from "./views/careers/Career";
import Career_desc from "./views/careers/Career_Desc";
import Home from "./views/Homepage/Home";
// import SimpleCollapse from "./views/Slide/Slide";
import Project from "./views/Project/Project";
import Project_page from "./views/Project/project_page";
import CarouselPage from "./views/Carousel/Carousel";
//import Blob from "./views/blob/Blob";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import TemporaryDrawer from "./views/TemporaryDrawer";
function App() {
  return (
    <div>
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch>
                  {/* <Header /> */}

                  <Route exact path="/About/" component={AboutUs} />
                  <Route
                    exact
                    path="/PrivacyPolicy/"
                    component={PrivacyPolicy}
                  />
                  <Route exact path="/Contact/" component={Contact} />
                  <Route exact path="/Career/" component={Career} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/Career_desc/" component={Career_desc} />
        <Route exact path="/project/:projid/" component={Project_page} />
        <Route exact path="/projects/:pid/" component={Project} />
      </Router>
      {/* <CarouselPage /> */}
      {/* <Blob /> */}
    </div>
  );
}
export default App;
