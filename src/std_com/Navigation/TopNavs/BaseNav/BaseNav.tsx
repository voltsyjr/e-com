import React, { useEffect, useState, useContext } from "react";
import styles from "./BaseNav.module.scss";
import { motion } from "framer-motion";
import { NavContextObject, ToggleNavContextObject } from "../../../_imports";


//* component
function BaseNav() {
  //* refs

  //* statics
  const { show } = useContext(ToggleNavContextObject.NavSlideContext);
  const { registeredNavs } = useContext(NavContextObject.NavContext);

  //* states
  const [posInfo, setPosInfo] = useState({ top: 0, height: 0 });

  //* effects
  useEffect(() => {
    let heightOffset = 0;
    if (Object.values(registeredNavs).length && !posInfo.height) {
      let myArr = Object.values(registeredNavs);
      for (let i of myArr) {
        //@ts-ignore
        heightOffset += i.height;
      }
      //! may not work
      //? works for now
      setPosInfo({
        height: window.innerHeight - heightOffset,
        top: registeredNavs.Header.height,
      });
    }
  });

  useEffect(() => {
    const body = document.body as HTMLElement;
    if (show) {
      body.classList.toggle(styles.stop_scrolling);
    } else {
      body.classList.remove(styles.stop_scrolling); 
    }
  }, [show]);

  //* callbacks and handlers

  //* rendering
  return (
    <div id="base-nav">
      {show && (
        <div
          className={styles.navOverlay}
          style={{
            height: posInfo.height,
            top: posInfo.top,
          }}
          onScroll={(e) => {e.preventDefault()}}
          onClick ={(e) => {e.preventDefault()}}
        />
      )}
      <motion.div
        className={styles.navContainer}
        style={{
          height: posInfo.height,
          top: posInfo.top,
        }}
        animate={
          show
            ? {
                left: 0,
              }
            : {}
        }
      ></motion.div>
    </div>
  );
}

export default BaseNav;
