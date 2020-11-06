import React, { Component } from "react";
import "./Career_Desc.scss";
import plus from "./../../assets/img/plus.png";
import cross from "./../../assets/img/cross.png";

function Form() {
  return (
    <div
      className="transition"

      //data-aos-delay="300"
      // data-aos-offset="0"
    >
      <form
        data-aos="fade-up"
        //data-aos-duration="2000"
        data-aos-easing="ease-in-back"
        data-aos-delay="10"
        data-aos-offset="0"
      >
        <label>Name</label>
        <br></br>
        <input type="text" name="name" placeholder="Type Here"></input>
        <br></br>
        <label>E-mail</label>
        <br></br>
        <input type="text" name="email" placeholder="Type Here" />
        <br></br>
        <label>Website</label>
        <br></br>
        <input type="text" name="message" placeholder="Type Here" />
        <br></br>
        <label>Cover Letter</label>
        <br></br>
        <textarea name="cover" placeholder="Type Here" />
        <br></br>
      </form>
    </div>
  );
}

class Career_Desc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      Cross: "",
    };
    this.showHide = this.showHide.bind(this);
    this.setActiveLink = this.setActiveLink.bind(this);
  }

  setActiveLink(activeID) {
    if (activeID === this.state.Cross) {
      this.setState({ Cross: "null" });
    } else {
      this.setState({ Cross: activeID });
    }
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="content" id="content">
        <div className="left_content">
          <h1>Careers</h1>

          <a href="#nav1" id="one" onClick={() => this.setActiveLink("one")}>
            <span>
              Extra 1
              {this.state.Cross === "one" ? (
                <img src={cross} />
              ) : (
                <img src={plus} />
              )}
            </span>
          </a>
          <br></br>

          <a href="#nav2" id="two" onClick={() => this.setActiveLink("two")}>
            <span>
              Full Stack Developer
              {this.state.Cross === "two" ? (
                <img src={cross} />
              ) : (
                <img src={plus} />
              )}
            </span>
          </a>

          <br></br>
          <a
            href="#nav3"
            id="three"
            onClick={() => this.setActiveLink("three")}
          >
            <span>
              Extra 2
              {this.state.Cross === "three" ? (
                <img src={cross} />
              ) : (
                <img src={plus} />
              )}
            </span>
          </a>
          <br></br>
          <br></br>
          <button> More Opportunities</button>
        </div>

        <div className="right_content">
          <div className="expandable" id="nav1">
            <h1>Extra 1 </h1>
            {!this.state.show && <p>Job Description 1</p>}
            <section id="content">
              <div className="career_container">
                {this.state.show && <Form />}
              </div>
            </section>
            <button onClick={() => this.setState({ show: true })}>
              Submit Application
            </button>
          </div>

          <div className="expandable" id="nav2">
            <h1>Full Stack Developer</h1>
            {!this.state.show && (
              <p>
                We're always on the lookout for talented developers with a knack
                for problem solving.<br></br>If you think you're up to the task,
                reach out and let us know!
              </p>
            )}
            <section id="content">
              <div className="career_container">
                {this.state.show && <Form />}
              </div>
            </section>
            <button onClick={() => this.setState({ show: true })}>
              Submit Application
            </button>
          </div>

          <div className="expandable" id="nav3">
            <h1>Extra 2</h1>
            {!this.state.show && <p>Job Description 2</p>}
            <section id="content">
              <div className="career_container">
                {this.state.show && <Form />}
              </div>
            </section>
            <button onClick={() => this.setState({ show: true })}>
              Submit Application
            </button>
          </div>
        </div>
      </div>
    );
  }
  showHide() {
    const { show } = this.state;
    this.setState({ show: !show });
  }
}
export default Career_Desc;
