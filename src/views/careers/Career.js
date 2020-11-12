import React, { Component } from "react";
import Careerimg from "./../../assets/img/career.jpg";

import "./Career.scss";
import Career_Desc from "./Career_Desc";
import { scroller } from "react-scroll";
class Career extends Component {
  componentDidMount = () => {
    scroller.scrollTo("career_content", {
      duration: 2000,
      delay: 2000,
      smooth: "easeInOutQuart",
    });
  };
  render() {
    return (
      <div className="top_wrapper">
        <div className="career_wrapper">
          <div className="career_image">
            <div className="picture">
              <img src={Careerimg} alt="Career_img" />
            </div>
          </div>

          <div className="career_content">
            <Career_Desc />
          </div>
        </div>
      </div>
    );
  }
}
export default Career;
