import React from "react";
import "./homepage.css";
// import head3D from "../../assets/3d_thumb.png";
// import capitan from "../../assets/07.jpg";
import baloon from "../../assets/010.jpg";
import cover from "../../assets/des3.jpg";
// import werew from "../../assets/17.png";
// import shadow from "../../assets/7686787.png";
// import faceDraw from "../../assets/face53453454.png";
// import framesPerf from "../../assets/justlivin4.png";

export default function HomePage() {
  return (
    <main className="mainContainer__homepage">
      <div className="mainPic__container">
        <p className="text__hey">Hey</p>
        <p className="text__comma">,</p>
        <p className="text__welcome">welcome</p>
        {/* <img src={head3D} alt="" /> */}
        <img
          className="homepage__images--capitan"
          src={cover}
          alt="El Cápitan"
        />
        {/* <img
          className="homepage__images--capitan"
          src={capitan}
          alt="El Cápitan"
        /> */}
        <img
          className="homepage__images--baloon"
          src={baloon}
          alt="The Baloon"
        />
        {/* <img src={werew} alt="" /> */}
        {/* <img src={shadow} alt="" /> */}
        {/* <img src={faceDraw} alt="" /> */}
        {/* <img src={framesPerf} alt="" /> */}
      </div>
    </main>
  );
}
