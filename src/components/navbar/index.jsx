import React from "react";
import "./navbar.css";
import TagsList from "../TagsList";
import Aside from "../Aside";

export default function NavBar() {
  return (
    <nav className="mainContainer">
      <div className="mainContainer__navbar">
        <h1 className="mainContainer__navbar--siteName">André Costa</h1>
        <p className="mainContainer__navbar--desktop mainContainer__navbar--desktop--text">
          Thirty-four. Lisbon. -- Visual Arts. Creative Developer.
        </p>
        <div className="mainContainer__navbar--desktop">
          <h3 className="mainContainer__navbar--desktop--text">
            <TagsList items={["About", "Technologies", "Work"]} />
          </h3>
        </div>
        <Aside />
      </div>
    </nav>
  );
}
