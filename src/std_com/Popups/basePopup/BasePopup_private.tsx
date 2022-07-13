import anime from "animejs/lib/anime.es";
import React, {
  useRef,
  useImperativeHandle,
  useState,
  ReducerAction,
} from "react";
import styles from "./BasePopup.module.scss";
import {motion} from 'framer-motion'; 

//* types, interfaces and classes */
export class PriceRange {
  public rangeStart: number;
  public rangeEnd: number;
  constructor(rangeStart: number = 0, rangeEnd: number = 0) {
    this.rangeStart = rangeStart;
    this.rangeEnd = rangeEnd;
  }
}

//* components */
export function FilterLabels(
  { heading }: { heading: string } = { heading: "heading" }
) {
  return (
    <div className={styles.filterLabel}>
      <div className={styles.circle}></div>
      <p className="regular">{heading}</p>
    </div>
  );
}

export function FilterWidget(
  {
    headingWidget,
    configWidget,
    widgetOffset,
  }: {
    headingWidget?: React.ReactNode;
    configWidget?: React.ReactNode;
    widgetOffset?: number;
  } = { widgetOffset: 16 }
) {
  return (
    <>
      <div
        className={styles.headingWidgetWrapper}
        style={{ marginBottom: widgetOffset }}
      >
        {headingWidget}
      </div>
      <div className={styles.configWidgetWrapper}>{configWidget}</div>
    </>
  );
}

export function ColorSelection({
  colorName,
  activeStyle,
  currentSelection,
  setSelection,
  id,
}: {
  colorName: string;
  activeStyle: React.CSSProperties;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
  currentSelection: number;
  id: number;
}) {

  return (
    <div
      className={styles.colorSelectionContainer}
      style={currentSelection === id ? activeStyle : {}}
      onClick={(e) => {
        if (currentSelection === id) {
          setSelection(-1);
        } else {
          setSelection(id);
        }
      }}
    >
      <div className={styles.wrapper}>
        <motion.div animate={currentSelection === id ? {rotate : 360} : {}}
          className={styles.colorIndicator}
          style={{ backgroundColor: colorName }}
        />
        <p className={styles.colorText}>{colorName}</p>
      </div>
    </div>
  );
}
