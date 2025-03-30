import { React, useState } from "react";

export default function ProjectContainer() {
  const [hovered, setHovered] = useState(null);
  const handleMouseEnter = (index) => {
    setHovered(index);
  };
  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div>
      {/* 1 */}
      <div className="projects__container">
        <div
          className={`mainContainer__projects--proj1 ${
            hovered === 1 ? "active" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <p className="projects--proj1">
            sketches<p className="text2">sketches</p>
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="projects__container">
        <div
          className={`mainContainer__projects--proj1 ${
            hovered === 2 ? "active" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <p className="projects--proj1">
            digital<p className="text2">digital</p>
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className="projects__container">
        <div
          className={`mainContainer__projects--proj1 ${
            hovered === 3 ? "active" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <p className="projects--proj1">
            photography<p className="text2">photography</p>
          </p>
        </div>
      </div>
      {/* 4 */}
      <div className="projects__container">
        <div
          className={`mainContainer__projects--proj1 ${
            hovered === 4 ? "active" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          <p className="projects--proj1">
            video<p className="text2">video</p>
          </p>
        </div>
      </div>
    </div>
  );
}
