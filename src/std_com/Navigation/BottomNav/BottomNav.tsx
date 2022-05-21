import React, { useState, useEffect } from "react";
import "./BottomNav.scss";
import { motion } from "framer-motion";

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
  }, []);

  if (showBottomNav)
    return (
      <motion.div
        className="navContainer"
        animate={showBottomNav ? { bottom: 0 } : {}}
        transition={{ duration: 0.3 }}
      ></motion.div>
    );
  else return <></>;
}

export default BottomNav;
