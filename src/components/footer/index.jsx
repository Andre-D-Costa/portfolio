import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="mainContainer__footer">
      <h4 className="mainContainer__text">© 2025 | All Rights Reserved </h4>
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
