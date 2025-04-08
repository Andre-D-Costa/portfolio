import React, { useState, useEffect } from "react";
import "./Cursor.css";

export default function Cursor() {
  const [cursorStyle, setCursorStyle] = useState({});
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorStyle({
        left: e.clientX + window.scrollX - 20 + "px",
        top: e.clientY + window.scrollY - 20 + "px",
      });
    };

    const handleMouseIn = (e) => {
      if (e.relatedTarget || window.contains(e.relatedTarget)) {
        setCursorVisible(true);
      }
    };
    const handleMouseOut = (e) => {
      if (!e.relatedTarget || !window.contains(e.relatedTarget)) {
        setCursorVisible(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseIn);
    window.addEventListener("mouseout", handleMouseOut);

    const hasPointerCursor = (element) => {
      const style = window.getComputedStyle(element);
      return style.cursor === "pointer";
    };
    const handlePointerCursorEnter = () => {
      setCursorVisible(false);
    };
    const handlePointerCursorLeave = () => {
      setCursorVisible(true);
    };
    const addPointerEvents = () => {
      const elementsWithPointer = document.querySelectorAll("*");
      elementsWithPointer.forEach((element) => {
        if (hasPointerCursor(element)) {
          element.addEventListener("mouseenter", handlePointerCursorEnter);
          element.addEventListener("mouseleave", handlePointerCursorLeave);
        }
      });
    };
    addPointerEvents();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mouseover", handleMouseIn);

      const elementsWithPointer = document.querySelectorAll("*");
      elementsWithPointer.forEach((element) => {
        element.removeEventListener("mouseenter", handlePointerCursorEnter);
        element.removeEventListener("mouseleave", handlePointerCursorLeave);
      });
    };
  }, []);

  return (
    <div
      className={`main__customCursor ${
        cursorVisible ? "" : "main__customCursor--hidden"
      }`}
      style={cursorStyle}
    ></div>
  );
}
