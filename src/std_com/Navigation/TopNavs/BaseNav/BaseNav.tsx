import React, { useEffect, useState } from "react";
import sytles from "./BaseNav.module.scss";
import { motion } from "framer-motion";

function BaseNav() {

  

  return (
    <>
      <div className={sytles.navOverlay}></div>
      <motion.div className={sytles.navContainer}></motion.div>
    </>
  );
}

export default BaseNav;
