import React, { Component } from "react";
import project_data from "./../../documents/project/project.json";
import bella_blob from "./../../assets/img/bella_logo.png";
import invareal_blob from "./../../assets/img/invareal.png";
import "./Home.scss";
class Home extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        load: false,
      };
    }
  }
  componentDidMount() {
    this.setState({ load: true });
  }
  render() {
    if (!this.state.load) {
      return <div>Loading...</div>;
    }
    const imgUrl = {
      prj001: {
        imgURL_art: [invareal_blob, invareal_blob],
      },
      prj002: {
        imgURL_art: [bella_blob, bella_blob],
      },
    };
    const projects_done =
      project_data &&
      project_data.projects.map((projectPost, idx) => {
        console.log("projectPost", projectPost, idx);
        let name = projectPost.pname;

        return (
          <>
            <a href={`/project/${projectPost.pid}/`} key={projectPost.pid}>
              <div key={projectPost.pid}>
                <div>
                  <picture style={{ marginTop: "50px" }}>
                    <source
                      srcSet={imgUrl[projectPost.pid].imgURL_art[1]}
                      type="image/webp"
                    />
                    <img
                      src={imgUrl[projectPost.pid].imgURL_art[0]}
                      alt="project"
                      style={{
                        width: "30%",
                      }}
                    />
                  </picture>
                </div>
                <div>{/* <div>{"project:projects:${idx}:pname"}</div> */}</div>
              </div>
            </a>
          </>
        );
      });
    return (
      <div>
        <div>{/* <h2> {"project:title"}</h2> */}</div>
        <div>{projects_done}</div>
        {/* <div className="blobs">
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
        </div> */}
      </div>
    );
  }
}

export default Home;
