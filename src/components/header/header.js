import React from "react";

import "./header.scss";
import logo from "./../../assets/img/p5.png";
import Contactus from "./../../views/Contact/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TemporaryDrawer from "./../../views/TemporaryDrawer";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.headerNavbar = React.createRef();
    this.menuWrapper = React.createRef();
    this.hamburger = React.createRef();
    this.state = {
      navLinks: [
        {
          linkName: "Portfolio",
          linkAdd: "#",
          active: false,
        },
        {
          linkName: "About Us",
          linkAdd: "About",
          active: false,
        },

        {
          linkName: "Careers",
          linkAdd: "Career",
          active: false,
        },
        // {
        //   linkName: "Contact Us",
        //   linkAdd: "Contact",
        //   active: false,
        // },
      ],

      scrollCheck: false,
    };
  }
  openModal = () => {
    this.setState({
      visible: true,
    });
  };

  closeModal = () => {
    this.setState({
      visible: false,
    });
  };
  handleHamburger = () => {
    if (window.innerWidth < 1000) {
      this.hamburger.current.classList.toggle("open");
      const submenu = this.menuWrapper.current;
      if (!submenu.classList.contains("menuWrapper_display")) {
        submenu.classList.add("menuWrapper_display");
        setTimeout(function () {
          submenu.classList.add("menuWrapper_fadein");
        }, 10);
      } else {
        submenu.classList.remove("menuWrapper_fadein");
        setTimeout(function () {
          submenu.classList.remove("menuWrapper_display");
        }, 500);
      }
    }
  };

  componentDidMount() {
    var prevScrollPos = window.pageYOffset;
    document.addEventListener("scroll", () => {
      let currentScrollPos = window.pageYOffset;
      if (this.headerNavbar.current) {
        if (currentScrollPos > prevScrollPos && currentScrollPos > 640) {
          this.headerNavbar.current.style.top = "-100px";
          this.hamburger.current.style.top = "-100px";
        } else {
          this.headerNavbar.current.style.top = "0px";
          this.hamburger.current.style.top = "14px";
        }
      }
      prevScrollPos = currentScrollPos;
    });
  }

  render() {
    const navlinks = this.state.navLinks.map((navLink) => {
      return (
        <div className="navLink" onClick={this.handleHamburger}>
          <Link smooth to={`/${navLink.linkAdd}/`}>
            {navLink.linkName}
          </Link>
        </div>
      );
    });

    return (
      <>
        <div className="menuWrapper" ref={this.menuWrapper}>
          <div className="linksWrapper">
            {navlinks}
            {/* <div className="navLink" onClick={this.handleHamburger}>
              <div>
                <TemporaryDrawer />
              </div>
            </div> */}
          </div>
        </div>
        <div className="header-wrap" ref={this.headerNavbar}>
          <div className="brandLogo">
            {/* <Link smooth to="/"> */}
            <img src={logo} alt="logo" />
            {/* </Link> */}
          </div>

          <div className="navLinks hover hover-1">
            <div className="desktopView">
              {navlinks}
              <div className="navLink" onClick={this.handleHamburger}>
                <div id="contactus">
                  <TemporaryDrawer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={this.hamburger} id="hamburger" onClick={this.handleHamburger}>
          <span></span>
          <span></span>
          <span className="last"></span>
        </div>
      </>
    );
  }
}

export default Header;
