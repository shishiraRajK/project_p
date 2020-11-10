import React, { Component } from "react";
import "./Contact.scss";

class Contact extends Component {
  render() {
    return (
      <div className="container_cnt">
        <div className="contact_wrapper">
          <div className="left_content">
            <h1>We would love to hear from you!</h1>
            <p style={{ color: "white" }}>
              Please fill the form to get in touch with us
            </p>
          </div>
          <div className="right_content">
            <form>
              <label>Name</label>
              <br></br>
              <input type="text" name="name" placeholder="Type Here"></input>
              <br></br>
              <label>E-mail</label>
              <br></br>
              <input type="text" name="email" placeholder="Type Here" />
              <br></br>
              <label>Message</label>
              <br></br>
              <textarea name="message" placeholder="Type Here" />
              <br></br>

              <button href="#" type="submit" class="glow-on-hover">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
