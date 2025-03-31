import React from "react";
import { useNavigate } from "react-router";
import "./technologies.css";

export default function Technologies() {
  const navigate = useNavigate();

  return (
    <div id="techs" className="mainContainer__technologies">
      <h2 className="mainContainer__technologies--tech">Tech</h2>
      <p className="mainContainer__technologies--textDesktop">
        JavaScript/Vite/React/Photoshop/InDesign/Blender
      </p>
      <p className="mainContainer__technologies--textMobile">
        JavaScript
        <br />
        Vite
        <br />
        React
        <br />
        Photoshop
        <br />
        InDesign
        <br />
        Blender
        <br />
      </p>
      <button
        className="btn__back"
        onClick={() => {
          navigate("/");
        }}
      >
        ◁
      </button>
    </div>
  );
}
