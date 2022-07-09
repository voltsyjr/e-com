import React, { useEffect } from "react";
import { useRef } from "react";
import { HashSet } from "../../_imports";
import styles from "./BasePopup.module.scss";

import * as coms from "./BasePopup_private";

function BasePopup() {
  useEffect(() => {
    const body = document.body as HTMLElement;
    body.classList.add(styles.stopScrolling);

    return () => body.classList.remove(styles.stopScrolling);
  });

  const priceRangeRef = useRef<coms.PriceRange>(new coms.PriceRange(-1, -1));

  const updateRef = (key: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      priceRangeRef.current[key] = e.target.value;
    };
  };

  return (
    <>
      <div className={styles.overLay}></div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.circleDecorator} />

          {/* main content starts */}

          <h2
            className={styles.cardHeading + " bold display"}
            onClick={() => {
              console.log(priceRangeRef.current);
            }}
          >
            Filters
          </h2>
          <div className={styles.spacer}></div>

          <coms.FilterWidget
            headingWidget={<coms.FilterLabels heading="Price Range - " />}
            configWidget={
              <coms.PriceRangeInput
                rangeStartCallback={updateRef("rangeStart")}
                rangeEndCallback={updateRef("rangeEnd")}
              />
            }
            widgetOffset={16}
          />
        </div>
      </div>
    </>
  );
}

export default BasePopup;
