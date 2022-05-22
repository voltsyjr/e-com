import React, { useState, useEffect } from "react";
import "./BottomNav.scss";
import { motion } from "framer-motion";
import { ReactComponent as ShoppingCart } from "../../../asset/nav-icons/Shopping-Cart.svg";
import { ReactComponent as User } from "../../../asset/nav-icons/User.svg";
import { ReactComponent as Dandelion } from "../../../asset/nav-icons/Dandelion.svg";
import { ReactComponent as Sale } from "../../../asset/nav-icons/Sale.svg";

/*
  notes 
    1. notice the lastScroll in the useEffect, its state is saved in the function that is recorded by the window object 
    2. notice the conditional return of jsx from the function
*/

function RegisterWindowScroll(
  setShowBottomNav: React.Dispatch<React.SetStateAction<boolean>>
) {
  let lastScroll = 0;
  window.onscroll = () => {
    const thresh = 0;
    if (lastScroll - window.scrollY < -thresh) {
      setShowBottomNav(true);
    } else if (lastScroll - window.scrollY >= thresh) {
      setShowBottomNav(false);
    }
    lastScroll =
      Math.abs(window.scrollY - lastScroll) > thresh
        ? window.scrollY
        : lastScroll;
  };
  return () => {
    window.onscroll = () => {};
  };
}

function LabelPositions() {
  let elements = document.querySelectorAll(
    ".navContainer-wrapper > .icon-container"
  );
  let positions: DOMRect[] = [];
  elements.forEach((val) => positions.push(val.getBoundingClientRect()));
  console.log(positions);
  return positions;
}

function GetRelativeVal(initialPosition: DOMRect, relativeIdentifier: string) {
  // initial position of element to relate
  const RelativeDOMRect = document
    .querySelector(relativeIdentifier)
    ?.getBoundingClientRect();
  if (!RelativeDOMRect) return null;

  // rectifying the initial position
  let top = initialPosition.top;
  top -= RelativeDOMRect.top;

  let left = initialPosition.left;
  left -= RelativeDOMRect.left;

  return {top, left}; 
}

function PlaceHighlightMover(
  initialPosition: DOMRect,
  identifier: string,
  relativeIdentifier: string
) {

  const rVal = GetRelativeVal(initialPosition, relativeIdentifier); 
  if(rVal === null) return null; 
  let {top, left} = rVal; 
  
  // applying changes
  const Highlight = document.querySelector(identifier) as HTMLElement;
  if (Highlight) {
    Highlight.style.top = top + "px";
    Highlight.style.left = left + "px";
    console.log("done");
  }
}

function BottomNav() {
  //* statics
  let paths = [<ShoppingCart />, <User />, <Dandelion />, <Sale />];
  let positions = null;

  //* states
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [currSelection, setCurrSelection] = useState(0);

  //* effects
  useEffect(() => {
    // effects and their callbacks
    const cbWin = RegisterWindowScroll(setShowBottomNav);
    return () => {
      cbWin();
    };
  }, []);

  useEffect(() => {
    positions = LabelPositions();
    PlaceHighlightMover(
      positions[currSelection],
      ".icon-container-mover",
      ".navContainer-wrapper"
    );
  })

  //* rendering
  if (showBottomNav)
    return (
      <motion.div
        className="navContainer"
        animate={showBottomNav ? { bottom: 0 } : {}}
        transition={{ duration: 0.3 }}
      >
        <div className="navContainer-wrapper">
          <motion.div className="icon-container-mover" animate={
            {}
          } ></motion.div>
          {paths.map((val, index) => (
            <div className="icon-container" key={index} onClick={() => {
              if(currSelection !== index) 
                setCurrSelection(index); 
            }}>
              {val}
            </div>
          ))}
        </div>
      </motion.div>
    );
  else return <></>;
}

export default BottomNav;
