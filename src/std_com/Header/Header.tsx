import React, { useContext, useEffect, useRef } from "react";
import "./Header.scss";

import { ReactComponent as Logo } from "../../asset/Logo.svg";
import { ReactComponent as HamburgerMenuIcon } from "../../asset/hamburgerMenu.svg";

import { NavContextObject, ToggleNavContextObject } from "../_imports";

function Header() {
  //* refs
  const myRef = useRef(null);

  //* statics
  const navContextData = useContext(NavContextObject.NavContext);
  const toggleContextData = useContext(ToggleNavContextObject.NavSlideContext); 

  //* states

  //* effects
  useEffect(() => {
    navContextData.setRegisteredNavs((prev) => ({
      ...prev,
      Header: myRef.current.getBoundingClientRect(),
    }));
  }, []);

  //* callbacks and handlers 
  const toggleNavSliding = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    toggleContextData.setShow(prev=>!prev); 
  }

  //* rendering
  return (
    <div ref={myRef} className="header-container row" id="top-header">
      <Logo className="logo" />
      <div className="ham-menu" onClick={toggleNavSliding} >
        <HamburgerMenuIcon className="ham-menu-icon" />
      </div>
    </div>
  );
}

export default Header;
