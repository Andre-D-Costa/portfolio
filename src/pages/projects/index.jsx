import { React } from "react";
import { useNavigate } from "react-router";
import "./projects.css";
import ProjectContainer from "../../components/ProjectContainer";
import { ChevronLeft } from "lucide-react";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div id="info" className="mainContainer__projects">
      <span>
        <h2 className="mainContainer__projects--work">Projects</h2>
      </span>
      <ProjectContainer />
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
