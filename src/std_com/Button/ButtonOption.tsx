import React, { useState } from "react";
import "./ButtonOption.scss";
import { types } from "../_imports";
import { motion, AnimatePresence } from "framer-motion";

function ButtonOption(prop: types.optionButtonProp) {
  const [id, setId] = useState(prop.id);
  const clickHandler = () => {
    prop.action(id);
    // console.log('clicked', id); 
  };

  return (
    <div
      className={`options ${prop.focus ? 'focus' : ''}`}
      onClick={clickHandler}
    >
      <div className={`circle`}>
        <AnimatePresence>
          {prop.focus && (
            <motion.div
              className="slider"
              animate={{ left: "0" }}
              initial={{ left: "-100%" }}
              transition={{ duration: 0.3 }}
              exit={{ left: "-100%" }}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
      <p className="option-label extralight">{prop.children}</p>
    </div>
  );
}

export default ButtonOption;
