import React, { Component } from "react";
import "./project_page.scss";
// import Slide from 'react-reveal/Slide';
import ss1 from "./../../assets/img/invareal_sub_one.png";
import bella from "./../../assets/img/bella_one.png";
import project_file from "./../../documents/project/project.json";

class Project_page extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        load: false,
      };
    }
    this.data = {
      prj001: {
        project_name: "Invareal",
        project_desc:
          "Invareal is a Real Estate asset management firm, whose expertise lies in developing and applying their proven experience in Management and Investment for national and international Investors with the purpose of increasing the value of your assets and portfolios.",

        p_img: ss1,
      },
      prj002: {
        project_name: "Bella Bona",
        project_desc:
          "Disjoint systems and manual processes are how companies start but not how they scale. The lack of tech infrastructure coupled with no in-house expertise compounded operational failures. Door-to-door lunch delivery for companies using a ghost kitchen to produce the food cuts down on complexity but needs end to end automation to challenge competitors like Lieferando. Standard solutions didn’t exist.",
        p_img: bella,
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

    // const project =
    //   project_data &&
    //   project_data.projects.map((projectPost, idx) => {
    //     console.log("projectPost", projectPost, idx);
    //     let name = projectPost.pname;
    let id = this.props.match.params.projid;

    return (
      <>
        <div className="wrap_project">
          <div className="proj_container">
            <div className="proj_title">{this.data[id].project_name}</div>
            <div className="wrap_item">
              <div className="lf">
                <p>{this.data[id].project_desc} </p>

                <a href={`/projects/${id}`} className="glow-on-hover">
                  Know more
                </a>
              </div>
              <div className="rs">
                <img src={this.data[id].p_img} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
    //   });
    // return (
    //   <div>
    //     <div></div>
    //     <div>{project}</div>
    //   </div>
    // );
  }
}
export default Project_page;
