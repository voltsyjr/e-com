import React, {
  useRef,
  useImperativeHandle,
  useState,
  ReducerAction,
} from "react";
import styles from "./BasePopup.module.scss";

import Input from '../../input/Input'; 

//* types, interfaces and classes */
type BasePopupParams = {
  show: boolean;
};

type inputCallback = (e: React.ChangeEvent<HTMLInputElement>) => void;

export class PriceRange {
  public rangeStart: number | undefined;
  public rangeEnd: number | undefined;
  constructor(rangeStart?: number, rangeEnd?: number) {
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

// export function PriceRangeInput(props: {
//   rangeStartCallback: inputCallback;
//   rangeEndCallback: inputCallback;
  
// }) {
//   return (
//     <div className="row">
//       <Input
//         // className={styles.inputStyles}
//         // type={"number"}
//         // onChange={props.rangeStartCallback}
//         inputParams={{
//           className : styles.inputStyles, 
//           type : "number", 
//           onChange : props.rangeStartCallback
//         }}

//       />
//       <p className={styles.inputSeparatorText}>to</p>
//       <Input
//         inputParams={{
//           className : styles.inputStyles, 
//           type : "number", 
//           onChange : props.rangeEndCallback
//         }}
//       />
//     </div>
//   );
// }

export {};
