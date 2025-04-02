import React, { useState, useEffect, useRef } from "react";
import SidebarList from "../SidebarList";

export default function Aside() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        ref={sidebarRef}
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
