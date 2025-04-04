import React from "react";
import { useNavigate } from "react-router";
import "./about.css";
import selfportraitpic from "../../assets/IMG_8038_2.png";

export default function AboutMe() {
  const navigate = useNavigate();

  return (
    <div id="info" className="mainContainer__about">
      <span>
        <h2 className="mainContainer__about--bio">Bio</h2>
      </span>
      <p className="mainContainer__about--text">
        Hello, I'm André, a 34 years old portuguese visual and digital artist
        and also a creative developer. Currently based in Lisbon.
      </p>
      <div className="pics__container">
        <img
          title="What's happening?"
          className="mainContainer__about--picStatic"
          src={selfportraitpic}
          alt="self-portrait_1"
        />
        <img
          title="What's happening?"
          className="mainContainer__about--pic"
          src={selfportraitpic}
          alt="self-portrait_1"
        />
      </div>
      <button
        className="btn__back"
        onClick={() => {
          navigate(-1);
        }}
      >
        ❮
      </button>
    </div>
  );
}
