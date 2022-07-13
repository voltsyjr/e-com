import React, { useCallback, useEffect, useState } from "react";
import "./Home.scss";

import { ReactComponent as ArrowRight } from "../../asset/arrow-right.svg";
import { stdCom, types } from "../_imports";
import { motion, AnimatePresence, useVelocity } from "framer-motion";

import imageSrc from "../../asset/images/fImageDummy.png";

function Home() {
  //* refs

  //* statics
  const messageList = ["Lehnga", "Kurti", "Saari", "Leggins", "Ghaghra"];
  const buttonParamList = messageList.map((val) => new types.buttonParam(val));
  const data = [
    {
      imgSrc: imageSrc,
      desc: {
        name: "1 green",
        price: 2000,
      },
    },
    {
      imgSrc: imageSrc,
      desc: {
        name: "2 green",
        price: 2000,
      },
    },
    {
      imgSrc: imageSrc,
      desc: {
        name: "2 green",
        price: 2000,
      },
    },
  ];

  //* motion
  // const _inVelocity = useVelocity(1);

  //* states
  const [currentSelected, setCurrentSelected] = useState(-1);
  const [showOptions, setShowOptions] = useState(false);
  const [showFilterPopup, setShowFilterPopup] = useState(false);

  //* effects

  //* callbacks and handlers

  //* rendering
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
            onClick={(e) => {
              console.log("clicked");
            }}
          />
        </div>
        <div className="break" />
        <div className="prodZone">
          <div className={"feature-heading-row" + " row"}>
            <h2 className="display zoneHeading">Featured Products</h2>
            <stdCom.BaseLabel
              onClick={() => {
                setShowFilterPopup(true);
              }}
              fill={false}
            />
          </div>

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
          <stdCom.SwipableProductCard data={data} Heading={"Kurti"} />
        </div>
      </div>
      <div className="spacer"></div>
      <stdCom.Footer />
      <stdCom.BottomNav />
      <stdCom.BaseNav />
      <AnimatePresence>
        {showFilterPopup && <stdCom.BasePopup setShow={setShowFilterPopup} />}
      </AnimatePresence>
    </>
  );
}

export default Home;
