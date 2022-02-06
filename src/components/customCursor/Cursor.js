import React, { useState } from "react";
import "./Cursor.css";

document.addEventListener("mousemove", (e) => {
  const cursor = document.getElementsByClassName("cr1")[0];
  cursor.setAttribute(
    "style",
    "top:" + e.pageY + "px; left:" + e.pageX + "px;"
  );
});

document.addEventListener("mousemove", (e) => {
  const cursor = document.getElementsByClassName("cr2")[0];
  cursor.setAttribute(
    "style",
    "top:" + e.pageY + "px; left:" + e.pageX + "px;"
  );
});

const Cursor = ({ linkMouseHover }) => {
  console.log(linkMouseHover);
  return (
    <>
      <div
        className={linkMouseHover ? "cursor-1 cr1  " : "cursor-1 cr1 active"}
      ></div>
      <div
        className={linkMouseHover ? "cursor-2 cr2" : "cursor-2 cr2 active"}
      ></div>
    </>
  );
};

export default Cursor;
