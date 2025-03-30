import React from "react";

export default function ProjectsList(props) {
  return (
    <>
      {props.items.map((item, key) => (
        <p className="projects--proj1" key={`proj-item-${item}-${key}`}>
          {item}
          <p>{item}</p>
        </p>
      ))}
    </>
  );
}
