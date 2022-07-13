import React, {
  useRef,
  useImperativeHandle,
  useState,
  ReducerAction,
} from "react";
import { ObjectLiteral } from "../../../global/types";
import styles from "./BasePopup.module.scss";

//* types, interfaces and classes */
type BasePopupParams = {
  show: boolean;
};

type inputCallback = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface FormState<T> {
  build(obj_ts: ObjectLiteral<string>): T;
}

export class FormPriceRange implements FormState<PriceRange> {
  build(obj_ts: ObjectLiteral<string>): PriceRange {
    const build = new PriceRange();
    build.rangeStart = parseInt(obj_ts.rangeStart);
    build.rangeEnd = parseInt(obj_ts.rangeEnd);
    return build;
  }
}

export class PriceRange {
  public rangeStart: number;
  public rangeEnd: number;
  constructor(rangeStart: number = 0, rangeEnd: number = 0) {
    this.rangeStart = rangeStart;
    this.rangeEnd = rangeEnd;
  }
}

export class FilterParams {
  public priceRange: PriceRange;

  constructor(range: PriceRange) {
    this.priceRange = range;
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
        <div
          className={styles.colorIndicator}
          style={{ backgroundColor: colorName }}
        ></div>
        <p className={styles.colorText}>{colorName}</p>
      </div>
    </div>
  );
}
