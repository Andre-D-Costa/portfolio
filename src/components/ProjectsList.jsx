import React from "react";

export default function ProjectsList(props) {
  return (
    <>
      {props.items.map((item, key) => (
        <div className="projects__container">
          <h2 className="mainContainer__projects--work">{item}</h2>
          <div className="mainContainer__projects">
            <p className="projects--text1" key={`proj-item-${item}-${key}`}>
              {item}
              <p className="projects--text2">{item}</p>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
