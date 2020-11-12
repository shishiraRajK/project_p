import React, { Component } from "react";
import about from "./../../assets/img/about_us.jpg";
import { scroller } from "react-scroll";
import "./AboutUs.scss";
class About extends Component {
  componentDidMount = () => {
    scroller.scrollTo("wrap_aboutus", {
      duration: 2000,
      delay: 2000,
      smooth: "easeInOutQuart",
    });
  };
  render() {
    console.log("in about");
    return (
      <div className="aboutus">
        <div className="about_wrapper">
          <div className="about_image">
            <div className="picture">
              <img src={about} alt="about_us" />
            </div>
          </div>
          <div className="about_content">
            <div className="wrap_aboutus">
              <h1>About Us</h1>
              <p>
                Permatech IT Services is a startup consulting studio. We work
                with German SMEs. From small startups to global players in the
                digitalising processes. We work like a startup with flat
                hierarchies, nice offices, and the motivation and skill to
                always a chieve our results. There's tremendous growth
                opportunities in the team and the opportunity to be staffed on
                the best projects
              </p>
              <p>For us, every project is unique!</p>
              <p>
                But the way we start working on any project is the same. We want
                to know everything about you. Your values and insights play a
                huge role in coming up with the best solution for you.
              </p>
              <p>
                We feel that the first step in solving a problem is to
                completely understand it, which is why we first listen and then
                get to work!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
