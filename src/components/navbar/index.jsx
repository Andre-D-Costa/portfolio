import React from "react";
import "./navbar.css";
import TagsList from "../TagsList";
import Aside from "../Aside";
import { useNavigate } from "react-router";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="mainContainer">
      <div className="mainContainer__navbar">
        <h1
          onClick={() => {
            navigate("/");
          }}
          className="mainContainer__navbar--siteName"
        >
          André Costa
        </h1>
        <p className="mainContainer__navbar--desktop mainContainer__navbar--desktop--text">
          Thirty-four. Lisbon. -- Visual Arts. Creative Developer.
        </p>
        <div className="mainContainer__navbar--desktop">
          <h3 className="mainContainer__navbar--desktop--text">
            <TagsList items={["About", "Technologies", "Projects"]} />
          </h3>
        </div>
        <Aside />
      </div>
    </nav>
  );
}
