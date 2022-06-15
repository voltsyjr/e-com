import React, { useEffect, useState, useContext } from "react";
import sytles from "./BaseNav.module.scss";
import { motion } from "framer-motion";
import { NavContextObject } from "../../../_imports";

/*TODO 
  1. format the code as per component creation practices 
*/

function BaseNav() {

  const [show, setShow] = useState(true);
  const { registeredNavs } = useContext(NavContextObject.NavContext);
  const [posInfo, setPosInfo] = useState({ top: 0, height: 0 });
  
  useEffect(() => {
    let heightOffset = 0;
    if (Object.values(registeredNavs).length && !posInfo.height) {
      let myArr = Object.values(registeredNavs); 
      for (let i of myArr) {
        //@ts-ignore
        heightOffset +=  i.height; 
      }
      //! may not work 
      //? works for now 
      setPosInfo({
        height: window.screen.height - heightOffset,
        top: registeredNavs.Header.height,
      });
    }
  });

  
  return (
    <>
      {/* <div className={sytles.navOverlay} id="base-nav"></div> */}
      <motion.div className={sytles.navContainer} style={{
        height : posInfo.height, 
        top : posInfo.top
      }}></motion.div>
    </>
  );
}

export default BaseNav;
