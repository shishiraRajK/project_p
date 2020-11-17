import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

import "./style.scss";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <a
            onClick={toggleDrawer(anchor, true)}
            style={{ cursor: "pointer", color: "white" }}
          >
            Contact Us
          </a>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="modal_cnt">
              <div className="modal_wrapper">
                <div className="left_modal">
                  <h1>We would love to hear from you!</h1>
                  <p style={{ color: "white" }}>
                    Please fill the form to get in touch with us
                  </p>
                </div>
                <div className="right_modal">
                  <a
                    className="close_drop"
                    onClick={toggleDrawer(anchor, false)}
                  >
                    &times;
                  </a>
                  <form>
                    <label>Name</label>
                    <br></br>
                    <input type="text" name="name"></input>
                    <br></br>
                    <label>E-mail</label>
                    <br></br>
                    <input type="text" name="email" />
                    <br></br>
                    <label>Message</label>
                    <br></br>
                    <textarea name="message" />
                    <br></br>

                    <button>Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
