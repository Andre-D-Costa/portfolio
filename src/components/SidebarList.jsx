import React from "react";
import { useNavigate } from "react-router";

export default function SidebarList(props) {
  const navigate = useNavigate();
  return (
    <>
      {props.items.map((item, key) => (
        <a
          href={`${item}`}
          className="mainContainer__navbar--mobile--link"
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
