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

// const showOnTop = new Event('showOnTop');

function RegisterWindowScroll(
  setShowBottomNav: React.Dispatch<React.SetStateAction<boolean>>
) {
  let lastScroll = 0;
  window.onscroll = (e: Event) => {
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

  window.ondblclick = () => {
    setShowBottomNav(true);
  };

  window.onclick = () => {
    setShowBottomNav(true);
  };

  return () => {
    window.onscroll = () => {};
    window.ondblclick = () => {};
    window.onclick = () => {};
  };
}

function LabelPositions() {
  let elements = document.querySelectorAll(
    ".navContainer-wrapper > .icon-container"
  );
  let positions: DOMRect[] = [];
  elements.forEach((val) => positions.push(val.getBoundingClientRect()));
  return positions;
}

function GetRelativeVal(initialIndex: number, relativeIdentifier: string) {
  // initial position of element to relate
  const RelativeDOMRect = document
    .querySelector(relativeIdentifier)
    ?.getBoundingClientRect();

  // before first render it will be null
  // so the first placement will be via the PlaceHighlightMover as described below
  // further to which this function will work fine
  if (!RelativeDOMRect) {
    return null;
  }

  let ItemsDOMRect = LabelPositions();

  const initialPosition = ItemsDOMRect[initialIndex];

  // rectifying the initial position
  let top = initialPosition.top;
  top -= RelativeDOMRect.top;

  let left = initialPosition.left;
  left -= RelativeDOMRect.left;

  const res = { top: top + "px", left: left + "px" };

  // for debug
  // console.log(res, initialPosition, RelativeDOMRect);

  return res;
}

function PlaceHighlightMover(
  initialPosition: number,
  identifier: string,
  relativeIdentifier: string
) {
  const rVal = GetRelativeVal(initialPosition, relativeIdentifier);
  if (rVal === null) return null;
  let { top, left } = rVal;

  // applying changes
  const Highlight = document.querySelector(identifier) as HTMLElement;
  if (Highlight) {
    Highlight.style.top = top;
    Highlight.style.left = left;
    // for debug
    // console.log("done");
  }
}

function VibrateOnClick() {
  // enable vibration support
  navigator.vibrate =
    navigator.vibrate ;

  if (navigator.vibrate) {
    // vibration API supported
    navigator.vibrate(50);
  }
}

//* component
function BottomNav() {
  //* statics
  let paths = [<ShoppingCart />, <User />, <Dandelion />, <Sale />];

  //* states
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [currSelection, setCurrSelection] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [positions, setPositions] = useState([]);

  //* effects
  useEffect(() => {
    // effects and their callbacks
    const cbWin = RegisterWindowScroll(setShowBottomNav);

    // registering cleanups
    return () => {
      cbWin();
    };
  }, []);

  useEffect(() => {
    // first placement
    PlaceHighlightMover(
      currSelection,
      ".icon-container-mover",
      ".navContainer-wrapper"
    );
  });

  //* rendering
  if (showBottomNav)
    return (
      <motion.div
        className="navContainer"
        animate={showBottomNav ? { bottom: 0 } : {}}
        transition={{ duration: 0.3 }}
      >
        <div className="navContainer-wrapper">
          <motion.div
            className="icon-container-mover"
            animate={GetRelativeVal(currSelection, ".navContainer")}
          ></motion.div>
          {paths.map((val, index) => (
            <div
              className="icon-container"
              key={index}
              onClick={() => {
                if (currSelection !== index) setCurrSelection(index);
                // if (isFirstRender === true) setIsFirstRender(false);
                VibrateOnClick(); 
              }}
            >
              {val}
            </div>
          ))}
        </div>
      </motion.div>
    );
  else return <></>;
}

export default BottomNav;
