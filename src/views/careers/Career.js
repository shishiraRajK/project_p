import React, { Component } from "react";
import Careerimg from "./../../assets/img/career.jpg";

import "./Career.scss";
import Career_Desc from "./Career_Desc";

class Career extends Component {
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
