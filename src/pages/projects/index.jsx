import { React } from "react";
import { useNavigate } from "react-router";
import "./projects.css";
import ProjectContainer from "../../components/ProjectContainer";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div id="info" className="mainContainer__projects">
      <h2 className="mainContainer__projects--work">Projects</h2>
      <ProjectContainer />
      <button
        className="btn__back"
        onClick={() => {
          navigate("/");
        }}
      >
        ❮
      </button>
    </div>
  );
}
