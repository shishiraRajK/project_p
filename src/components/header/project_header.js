import React from "react";
import { matchPath } from "react-router";
import "./header.scss";
import logo from "./../../assets/img/logo_black.png";
import Contactus from "./../../views/Contact/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TemporaryDrawer from "./../../views/TemporaryDrawer";
import { colors } from "@material-ui/core";

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
      backgroundColor: "transparent",
      color: "black",
      scrollCheck: false,
    };
  }
  listenScrollEvent = (e) => {
    if (window.scrollY > 400) {
      this.setState({ backgroundColor: "#102240" });
      this.setState({ color: "white" });
    } else {
      this.setState({ backgroundColor: "transparent" });
      this.setState({ color: "black" });
    }
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
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  // componentDidMount() {
  //   window.addEventListener("scroll", this.listenScrollEvent);
  // }
  render() {
    const navlinks = this.state.navLinks.map((navLink) => {
      // const path = ["/projects/prj001", "/projects/prj002"];
      // const pathname = window.location.pathname;
      // const headerColor = path.map((p) => (pathname === p ? true : false));
      // const routes = [
      //   {
      //     key: "page1",
      //     exact: true,
      //     path: "/projects/prj001",
      //   },
      //   {
      //     key: "page2",
      //     exact: true,
      //     path: "/projects/prj002",
      //   },
      // ];
      // const pathname = window.location.pathname;
      // const headerColor = routes.map((p) =>
      //   pathname === p.path ? true : false
      // );

      // const path = window.location.pathname;
      // const headerColor =
      //   window.location.pathname === currentRout e.path
      //     ? { color: "black" }
      //     : { color: "white" };

      return (
        <div onClick={this.handleHamburger} className="navLink">
          <Link
            smooth
            to={`/${navLink.linkAdd}/`}
            style={{ color: this.state.color }}
          >
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
            <div className="navLink" onClick={this.handleHamburger}>
              <div id="contactus">
                <TemporaryDrawer />
              </div>
            </div>
          </div>
        </div>
        <div
          className="header-wrap"
          ref={this.headerNavbar}
          style={{
            backgroundColor: this.state.backgroundColor,
          }}
        >
          <div className="brandLogo">
            {/* <Link smooth to="/"> */}
            <img src={logo} alt="logo" />
            {/* </Link> */}
          </div>

          <div className="navLinks hover hover-1">
            <div className="desktopView">
              {navlinks}
              <div
                className="navLink"
                style={{ color: this.state.color }}
                onClick={this.handleHamburger}
              >
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
