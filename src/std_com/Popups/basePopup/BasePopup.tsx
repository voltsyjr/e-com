import React, { useEffect, useState } from "react";
import Input from "../../input/Input";
import Spacer from "../../spacer/spacer";
import styles from "./BasePopup.module.scss";
import * as coms from "./BasePopup_private";
import { types } from "../../_imports";
import GeneralList from "../../Lists/GeneralList";
import { ReactComponent as CloseIcon } from "../../../asset/icons/close-round.svg";
import { FormValidator, Hash } from "../../../solutions/raw";
import ShakingButton from "../../Button/ShakingButton";
import { motion } from "framer-motion";

function BasePopup({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    const body = document.body as HTMLElement;
    body.classList.add(styles.stopScrolling);
    return () => body.classList.remove(styles.stopScrolling);
  });

  const [currentColor, setCurrentColor] = useState(-1);

  const [a, setA] = useState<types.ObjectLiteral<string>>(
    FormValidator.BuildObject<string>(new coms.PriceRange(), (val) => "")
  );
  const [b, setB] = useState<
    types.ObjectLiteral<types.InputValidationParameters>
  >(
    FormValidator.BuildObject<types.InputValidationParameters>(
      new coms.PriceRange(),
      (val) => new types.InputValidationParameters()
    )
  );

  const DHash = new Hash<string, string>(a, setA);
  const VHash = new Hash<string, types.InputValidationParameters>(b, setB);
  const _ = new FormValidator<coms.PriceRange>(DHash, VHash);

  return (
    <motion.div
      initial={{
        position: "fixed",
        top: "50%",
        left: -200,
        y : "-50%"
      }}
      animate={{
        left : "50%", 
        x : "-50%"
      }}
      exit={{x : "60%"}}
      className={styles.container}
    >
      {/* <div className={styles.overLay}></div> */}
        <div className={styles.wrapper}>
          <div className={styles.circleDecorator} />

          {/* main content starts */}

          <div className={styles.headingRow}>
            <h2 className={styles.cardHeading + " bold display"}>Filters</h2>
            <CloseIcon
              className={styles.closeIcon}
              onClick={() => setShow(false)}
            />
          </div>
          <div className={styles.spacer}></div>

          <div className={styles.filterWidgetContainer}>
            <coms.FilterLabels heading="Price Range - " />
            <Spacer offset={14} />
            <div className="plainRow">
              <Input
                inputParams={{
                  onChange: (e) => DHash.set("rangeStart", e.target.value),
                  type: "number",
                  className: styles.inputStyles,
                }}
                width={87}
                offset={4}
                errStyles={{
                  para: {
                    color: "red",
                    fontSize: 10,
                  },
                  input: {
                    borderColor: "red",
                  },
                }}
                err={VHash.get("rangeStart")}
                divStyles={{
                  marginLeft: 4,
                  marginRight: 4,
                }}
              />
              <p className={styles.inputSeparatorText}>to</p>
              <Input
                inputParams={{
                  onChange: (e) => DHash.set("rangeEnd", e.target.value),
                  type: "number",
                  className: styles.inputStyles,
                }}
                width={87}
                offset={4}
                errStyles={{
                  para: {
                    color: "red",
                    fontSize: 10,
                  },
                  input: {
                    borderColor: "red",
                  },
                }}
                err={VHash.get("rangeEnd")}
                divStyles={{
                  marginLeft: 4,
                  marginRight: 4,
                }}
              />
            </div>
            <Spacer offset={30} />
            <coms.FilterLabels heading="Colors" />
            <GeneralList<string>
              batch={[
                "red",
                "blue",
                "pink",
                "lightgreen",
                "yellow",
                "gold",
                "brown",
              ]}
              renderMethod={function (
                val: string,
                index: number,
                array: string[]
              ): React.ReactNode {
                return (
                  <coms.ColorSelection
                    activeStyle={{ backgroundColor: "#f2f2f2" }}
                    colorName={val}
                    key={index}
                    id={index}
                    currentSelection={currentColor}
                    setSelection={setCurrentColor}
                  />
                );
              }}
              listContainerStyle={undefined}
            />
          </div>
          <Spacer offset={30} />
          <ShakingButton
            className={styles.submitButton}
            onClick={() => {
              _.validateMany(Object.keys(new coms.PriceRange()), [
                (data: string) => {
                  let verdict = new types.InputValidationParameters();
                  if (data.length === 0) {
                    verdict.isValid = false;
                    verdict.errMessage = "input is empty";
                  } else {
                    verdict.isValid = true;
                    verdict.errMessage = "";
                  }
                  return verdict;
                },
              ]);
            }}
          >
            <p className="regular">submit</p>
          </ShakingButton>
        </div>
    </motion.div>
  );
}

export default BasePopup;
