import React, { useContext, useEffect, useRef } from "react";
import "./Header.scss";

import { ReactComponent as Logo } from "../../asset/Logo.svg";

import { NavContextObject } from "../_imports";

function Header() {
  //* refs
  const myRef = useRef(null);

  //* statics
  const navContextData = useContext(NavContextObject.NavContext);
  
  //* states

  //* effects
  useEffect(() => {
    navContextData.setRegisteredNavs((prev) => ({
      ...prev,
      Header: myRef.current.getBoundingClientRect(),
    }));
  }, []);

  //* rendering
  return (
    <div ref={myRef} className="header-container row" id="top-header">
      <Logo className="logo" />
    </div>
  );
}

export default Header;
