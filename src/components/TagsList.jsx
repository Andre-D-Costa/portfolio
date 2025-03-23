import React from "react";
import { useNavigate } from "react-router";

export default function TagsList(props) {
  const navigate = useNavigate();
  return (
    <>
      {props.items.map((item, key) => (
        <a
          href={`${item}`}
          className="mainContainer__navbar--desktop--link"
          onClick={() => {
            navigate(`/${item}`);
          }}
          key={`link-item-${item}-${key}`}
        >
          {item}
        </a>
      ))}
    </>
  );
}
