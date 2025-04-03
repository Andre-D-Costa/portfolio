import React, { useState, useEffect } from "react";
import "./Cursor.css";

export default function Cursor() {
  const [cursorStyle, setCursorStyle] = useState({});

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorStyle({
        left: e.clientX + window.scrollX - 16.5 + "px",
        top: e.clientY + window.scrollY - 16.5 + "px",
      });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="main__customCursor" style={cursorStyle}></div>;
}
