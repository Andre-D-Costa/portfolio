import React from "react";
import { useNavigate } from "react-router";
import "./about.css";
// import selfportraitpic from "../../assets/IMG_8038_2.png";
import portraitone from "../../assets/IMG_8038_1.jpg";
import portraittwo from "../../assets/IMG_8038_4.jpg";

import { ChevronLeft } from "lucide-react";

export default function AboutMe() {
  const navigate = useNavigate();

  return (
    <div id="info" className="mainContainer__about">
      <span>
        <h2 className="mainContainer__about--bio">Bio</h2>
      </span>
      <p className="mainContainer__about--text">
        Hello, I'm André, a 34 years old portuguese visual and digital artist
        and also a creative developer. From Lisbon and currently based in The
        Hague.
      </p>
      <div className="profile_pics--container">
        <img
          title="What's happening?"
          src={portraitone}
          alt="self_portrait"
          className="profile__pic--first"
        />
        <img
          title="What's happening?"
          src={portraittwo}
          alt="self_portrait"
          className="profile__pic--second"
        />
      </div>
      {/* <div className="pics__container">
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
      </div> */}
      <button
        className="btn__back"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ChevronLeft />
      </button>
    </div>
  );
}
