import React from "react";
import "./homepage.css";
import cover from "../../assets/des3.jpg";
import framesPerf from "../../assets/justlivin4.png";

export default function HomePage() {
  return (
    <main className="mainContainer__homepage">
      <div className="mainPic__container">
        <p className="text__hey">Hey</p>
        <p className="text__comma">,</p>
        <p className="text__welcome">welcome</p>
        <p className="text__welcome2">
          wel-
          <br />
          come
        </p>
        <img className="homepage__image--cover" src={cover} alt="cover_pic" />
        <img
          className="homepage__image--coverMobile"
          src={framesPerf}
          alt="cover__pic--mobile"
        />
      </div>
    </main>
  );
}
