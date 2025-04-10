import React from "react";
import "./footer.css";
import CurrentDate from "../Date";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

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
          <h3 title="LinkedIn" class="mainContainer__footer--text-linked">
            <FontAwesomeIcon icon={faLinkedin} />
          </h3>
        </a>
        <a
          target="_blank"
          className="mainContainer__footer--icon-git"
          href="https://github.com/Andre-D-Costa"
        >
          <h3 title="GitHub" class="mainContainer__footer--text-git">
            <FontAwesomeIcon icon={faSquareGithub} />
          </h3>
        </a>
        <a
          target="_blank"
          className="mainContainer__footer--icon-insta"
          href="https://www.instagram.com/andred.costa/"
        >
          <h3 title="Instagram" class="mainContainer__footer--text-insta">
            <FontAwesomeIcon icon={faSquareInstagram} />
          </h3>
        </a>
      </div>
      <h4 title="Hi!" className="mainContainer__text">
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
