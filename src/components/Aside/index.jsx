import React, { useState } from "react";
import SidebarList from "../SidebarList";

export default function Aside() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mainContainer__navbar--mobile">
        <button
          className="mainContainer__navbar--mobile--sidebarTrigger"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <button className="mainContainer__navbar--mobile--sidebarTrigger--active">
              {" "}
            </button>
          ) : (
            " "
          )}
        </button>
      </div>
      <aside
        className={`mainContainer__navbar--mobile--sidebar ${
          isOpen && "mainContainer__navbar--mobile--sidebar--open"
        }`}
      >
        <ul className="mainContainer__navbar--mobile--list">
          <li>
            <SidebarList items={["About", "Technologies", "Projects"]} />
          </li>
        </ul>
      </aside>
    </>
  );
}
