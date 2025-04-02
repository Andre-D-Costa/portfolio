import React from "react";
import "./footer.css";
import CurrentDate from "../Date";

import linkedinicon from "../../assets/linkedin2.png";
import githubicon from "../../assets/share.png";
import instagramicon from "../../assets/instagram2.png";

export default function Footer() {
  return (
    <footer className="mainContainer__footer">
      <h4 className="mainContainer__text">© 2025 | All Rights Reserved </h4>
      <CurrentDate />
      <div className="mainContainer__footer--icons">
        <a
          target="_blank"
          className="mainContainer__footer--icon-linked"
          href="https://www.linkedin.com/in/andre-d-costa/"
        >
          <h3 class="mainContainer__footer--text-linked">LinkedIn</h3>
          {/* <img src={linkedinicon} alt="LinkedIn_Icon" /> */}
        </a>
        <a
          target="_blank"
          className="mainContainer__footer--icon-git"
          href="https://github.com/Andre-D-Costa"
        >
          <h3 class="mainContainer__footer--text-git">GitHub</h3>
          {/* <img src={githubicon} alt="GitHub_Icon" /> */}
        </a>
        <a
          target="_blank"
          className="mainContainer__footer--icon-insta"
          href="https://www.instagram.com/andred.costa/"
        >
          <h3 class="mainContainer__footer--text-insta">Instagram</h3>
          {/* <img src={instagramicon} alt="Instagram_Icon" /> */}
        </a>
      </div>
      <h4 className="mainContainer__text">
        <a
          className="mainContainer__text--link"
          href="mailto:costadavidandre@gmail.com"
        >
          Tell me something
        </a>
      </h4>
    </footer>
  );
}
