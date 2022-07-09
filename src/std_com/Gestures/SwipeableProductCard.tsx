import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { types } from "../_imports";

import Styles from "./SwipeableProductCard.module.scss";

import BaseProductCard from "../ProductCards/BaseProductCard/BaseProductCard";

type SwipeableProductCardType = {
  data: types.ProductCard[];
  sliderContainerStyle?: object;
  cardContainerStyle?: object;
  Heading : string; 
};

function SwipableProductCard(props: SwipeableProductCardType) {
  return (
    <>
      <p className="montserrat regular" style={{ fontSize: 20 }}>
        {props.Heading}
      </p>
      <div
        className={Styles.SwipeableContainer}
        style={props.sliderContainerStyle}
      >
        {props.data.map((val, index) => {
          return (
            <BaseProductCard
              key={index}
              imgSrc={val.imgSrc}
              desc={val.desc}
              style={{
                margin: 12,
                boxShadow: "rgba(100, 100, 111, 0.4) 0px 10px 10px 0px",
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default SwipableProductCard;
