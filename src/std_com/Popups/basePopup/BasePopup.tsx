import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Input from "../../input/Input";
import Spacer from "../../spacer/spacer";
import styles from "./BasePopup.module.scss";

import * as coms from "./BasePopup_private";

import useAppliedStates from "../../Hooks/useAppliedStates";

function BasePopup() {
  useEffect(() => {
    const body = document.body as HTMLElement;
    body.classList.add(styles.stopScrolling);
    return () => body.classList.remove(styles.stopScrolling);
  });

  const [pr_as_obj, pr_as_setter] = useAppliedStates<
    coms.PriceRange,
    { hasError: boolean; errMessage: string[] }
  >(new coms.PriceRange(-1, -1), {
    hasError: false,
    errMessage: [""],
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

          <coms.FilterLabels heading="Price Range - " />
          <Spacer offset={14} />
          <div className="plainRow">
            <Input
              inputParams={{
                onChange: updateRef("rangeStart"),
                type: "number",
                className: styles.inputStyles,
              }}
              hasError={pr_as_obj["rangeStart"].hasError}
              width={87}
              offset={4}
              err={{
                errMessage: pr_as_obj["rangeStart"].errMessage,
                errStyles: {
                  para: {
                    color: "red",
                    fontSize: 10,
                  },
                  input: {
                    borderColor: "red",
                  },
                },
              }}
              divStyles={{
                marginLeft: 4,
                marginRight: 4,
              }}
            />
            <p className={styles.inputSeparatorText}>to</p>
            <Input
              inputParams={{
                onChange: updateRef("rangeEnd"),
                type: "number",
                className: styles.inputStyles,
              }}
              hasError={pr_as_obj["rangeEnd"].hasError}
              width={87}
              offset={4}
              err={{
                errMessage: pr_as_obj["rangeEnd"].errMessage,
                errStyles: {
                  para: {
                    color: "red",
                    fontSize: 10,
                  },
                  input: {
                    borderColor: "red",
                  },
                },
              }}
              divStyles={{
                marginLeft: 4,
                marginRight: 4,
              }}
            />
          </div>
          <Spacer offset={30} />
          <coms.FilterLabels heading="Colors" />
          <button
            onClick={() => {
              if (priceRangeRef.current.rangeEnd == -1) {
                pr_as_setter((prev) => ({
                  ...prev,
                  rangeEnd: { hasError: true, errMessage: ["input is empty"] },
                }));
              }

              if (priceRangeRef.current.rangeStart == -1) {
                pr_as_setter((prev) => ({
                  ...prev,
                  rangeStart: { hasError: true, errMessage: ["input is empty"] },
                }));
              }
            }}
          >
            submit
          </button>
        </div>
      </div>
    </>
  );
}

export default BasePopup;
