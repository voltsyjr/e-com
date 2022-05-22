import React, { useState, useEffect } from "react";
import "./BottomNav.scss";
import { motion } from "framer-motion";
import {ReactComponent as ShoppingCart} from '../../../asset/nav-icons/Shopping-Cart.svg'; 
import {ReactComponent as User} from '../../../asset/nav-icons/User.svg'; 
import {ReactComponent as Dandelion} from '../../../asset/nav-icons/Dandelion.svg'; 
import {ReactComponent as Sale} from '../../../asset/nav-icons/Sale.svg'; 


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
    return () => {
      window.onscroll = () => {};
    };
  }, []);

  // let paths = [ShoppingCart, User, Dandelion, Sale]; 
  let paths = [<ShoppingCart/>, <User/>, <Dandelion/>, <Sale/>]
  if (showBottomNav)
    return (
      <motion.div
        className="navContainer"
        animate={showBottomNav ? { bottom: 0 } : {}}
        transition={{ duration: 0.3 }}
      >
        {paths.map((val, index) => (
          <div className="icon-container" key={index}>
            {val}
          </div>
        ))}
        
      </motion.div>
    );
  else return <></>;
}

export default BottomNav;
