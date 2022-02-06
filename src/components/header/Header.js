import React, { useState } from "react";
import "./Header.css";
import NavItem from "./Navitem";
import NavitemApi from "../Api/NavItemApi";
import Follow from "./Follow";
import FollowLink from "../Api/FollowApi";
import Cursor from "../customCursor/Cursor";

const Header = () => {
  const [navItem, setNavItem] = useState(NavitemApi);
  const [followLink, setFollowLink] = useState(FollowLink);
  const [linkMouseHover, setLinkMouseHover] = useState(true);
  const [active, setActive] = useState(true);

  const mHover = () => {
    if (window.onmouseover) {
      setLinkMouseHover(true);
    } else {
      setLinkMouseHover(false);
    }
  };

  const mLeave = () => {
    if (window.onmouseleave) {
      setLinkMouseHover(false);
    } else {
      setLinkMouseHover(true);
    }
  };

  document.querySelectorAll("a").forEach((links) => {
    links.addEventListener("mouseover", mHover);
    links.addEventListener("mouseleave", mLeave);
  });

  const FName = "siam";
  const LName = "chowdhury";

  const hideNav = () => {
    if (window.scrollY >= 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener("scroll", hideNav);

  return (
    <>
      {/* custom coursor */}
      <Cursor linkMouseHover={linkMouseHover} />
      <div
        id="menuBar"
        onClick={() => setActive(!active)}
        className={active ? "fas fa-bars" : "fas fa-times"}
      ></div>
      <header className={active ? "" : "active"}>
        <div className="img">
          <img src="images/siam2.jpeg" alt="" />
        </div>
        <a href="#" className="logo">
          <span>{FName} </span>
          {LName}
        </a>

        <NavItem navItem={navItem} />
        <Follow followLink={followLink} />
      </header>
    </>
  );
};

export default Header;
