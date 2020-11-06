import React, { Component } from "react";
//import Fiddle from "./../../../assets/img/fiddle_prj.png";
import Head_img from "./../../assets/img/main-blob.png";
import gif from "./../../assets/img/bona_blob.gif";
import invareal_logo from "./../../assets/img/invareal.png";
import invareal_one from "./../../assets/img/invareal_sub_one.png";
import invareal_two from "./../../assets/img/invareal_sub_two.png";
import bella_one from "./../../assets/img/bella_one.png";
import bella_two from "./../../assets/img/bella_two.png";
import bella_logo from "./../../assets/img/bella_logo.png";

import "./Project.scss";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laod: false,
    };
    this.project_content = {
      prj001: {
        name: "Invareal",
        desc_one:
          "Inavreal is a Real Estate asset management firm, whose expertise lies in developing and applying their proven experience in Management and Investment for national and international Investors with the purpose of increasing the value of your assets and portfolios.",
        head_img: Head_img,
        title_img: invareal_logo,
        img_one: invareal_one,
        desc_two:
          "The combination of creative ideas and well founded analysis is the bedrock of their approach. They are confident in negotiations and with a hands-on mentality, and also take care of all operative areas around your real estate.",
        img_two: invareal_two,
      },
      prj002: {
        name: "Bella & Bona",
        desc_one:
          "Disjoint systems and manual processes are how companies start but not how they scale. The lack of tech infrastructure coupled with no in-house expertise compounded operational failures. Door-to-door lunch delivery for companies using a ghost kitchen to produce the food cuts down on complexity but needs end to end automation to challenge competitors like Lieferando. Standard solutions didn’t exist.",
        head_img: bella_one,
        title_img: bella_logo,
        img_one: bella_one,
        desc_two:
          "Disjoint systems and manual processes are how companies start but not how they scale. The lack of tech infrastructure coupled with no in-house expertise compounded operational failures. Door-to-door lunch delivery for companies using a ghost kitchen to produce the food cuts down on complexity but needs end to end automation to challenge competitors like Lieferando. Standard solutions didn’t exist.",
        img_two: bella_two,
      },
    };
  }
  componentDidMount() {
    this.setState({ load: true });
  }

  render() {
    if (!this.state.load) {
      return <div>Loading...</div>;
    }

    let id = this.props.match.params.pid;
    return (
      <div className="project_page">
        <div className="project_wrapper">
          <div className="head_img">
            <img src={this.project_content[id].head_img}></img>
          </div>

          <div className="title">
            <h1>{this.project_content[id].name}</h1>
          </div>

          <div className="main_content">
            <div className="wrap_one">
              <div className="gif_img">
                <img src={gif} className="gif_img"></img>
              </div>

              <div className="content_one" data-aos="fade-up">
                <p>{this.project_content[id].desc_one}</p>
              </div>
              <div className="button" data-aos="fade-up">
                <button>Find Us here</button>
              </div>
            </div>
            <br></br>
            <div className="image">
              <div data-aos="fade-up">
                <img
                  src={this.project_content[id].title_img}
                  style={{ width: "50%" }}
                ></img>
                <br />
              </div>
              <div data-aos="fade-up">
                <img src={this.project_content[id].img_one}></img>
                <br />
              </div>
              <div data-aos="fade-up">
                <p className="content_two">
                  {this.project_content[id].desc_two}
                </p>
              </div>
              <div data-aos="fade-up">
                <img src={this.project_content[id].img_two}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
