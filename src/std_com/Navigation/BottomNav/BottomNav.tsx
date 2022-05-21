import React, { useState, useEffect } from "react";
import "./BottomNav.scss";
import { motion } from "framer-motion";

/*
  notes 
    1. notice the lastScroll in the useEffect, its state is saved in the function that is recorded by the window object 
    2. notice the conditional return of jsx from the function
*/

function BottomNav() {
  const [showBottomNav, setShowBottomNav] = useState(true);
  useEffect(() => {
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
    return () => {window.onscroll = () => {}}; 
  }, []);

  if (showBottomNav)
    return (
      <motion.div
        className="navContainer"
        animate={showBottomNav ? { bottom: 0 } : {}}
        transition={{ duration: 0.3 }}
      >

      </motion.div>
    );
  else return <></>;
}

export default BottomNav;
