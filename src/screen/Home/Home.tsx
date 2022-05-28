import React, { useCallback, useEffect, useState } from "react";
import "./Home.scss";

import { ReactComponent as ArrowRight } from "../../asset/arrow-right.svg";
import { stdCom, types } from "../_imports";
import { motion } from "framer-motion";

function Home() {
  // screen states
  const [currentSelected, setCurrentSelected] = useState(-1);
  const [showOptions, setShowOptions] = useState(false);

  // the option parameter list
  const messageList = ["Lehnga", "Kurti", "Saari", "Leggins", "Ghaghra"];
  const buttonParamList = messageList.map((val) => new types.buttonParam(val));

  return (
    <>
      <div className="container">
        <h1 className="display heading">Want to look your best?</h1>
        <p className="subheading extralight">We got you covered</p>
        <p className="pitch extralight">
          Get the best look for you from our latest collection for the Modern
          Woman
        </p>
        <div className="cta-wrapper">
          <stdCom.ButtonCta
            message="get my best look"
            // get the right com animated
            // get a prop to override the button container shadow
            rightCom={() => <ArrowRight />}
          />
        </div>
        <div className="break" />
        <div className="prodZone">
          <h2 className="display zoneHeading">Featured Products</h2>
          
          <motion.div
            className="option-list-container"
            animate={showOptions ? { height: "fit-content" } : {}}
          >
            <stdCom.OptionList
              batch={buttonParamList}
              setCurrentSelected={setCurrentSelected}
              currentSelected={currentSelected}
            />
          </motion.div>
          <p
            className="scrollLabel extralight"
            onClick={() => setShowOptions((prev) => !prev)}
          >
            see all categories
          </p>
        </div>
      </div>
      <stdCom.BaseNav/>
      <stdCom.BottomNav />
    </>
  );
}

export default Home;
