import React, { Component } from "react";
import "./Blob.scss";
class Blob extends Component {
  render() {
    const SOCIAL_ARR = ["twitter", "facebook", "instagram"];
    const SOCIAL_LINKS = SOCIAL_ARR.map((app) => (
      <li
        key={app.toString()}
        className={`social__link link--${app.toString()}`}
      >
        <a href={`https://${app.toString()}.com/beyonce`} target="blank_" />
        <i className={`fa fa-3x fa-${app.toString()}`} />
      </li>
    ));
    return (
      <>
        <ul className="social-links">{SOCIAL_LINKS}</ul>
        <a
          href="https://markmead.github.io/css-blob-creator/"
          target="_blank"
          className="off-link"
        >
          Easily create Blob CSS shapes
        </a>
      </>
    );
  }
}
export default Blob;
