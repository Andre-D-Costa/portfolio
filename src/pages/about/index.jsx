import React from "react";
import { useNavigate } from "react-router";
import "./about.css";

export default function AboutMe() {
  const navigate = useNavigate();

  return (
    <div id="info" className="mainContainer__about">
      <h2 className="mainContainer__about--bio">Bio</h2>
      <p className="mainContainer__about--text">
        Hello, I'm André, a 34 years old portuguese visual and digital artist
        and also a creative developer. Currently based in Lisbon.
      </p>
      <button
        className="btn__back"
        onClick={() => {
          navigate("/");
        }}
      >
        ◄
      </button>
    </div>
  );
}
