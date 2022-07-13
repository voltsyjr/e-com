// import React, { useEffect, useState } from "react";
// import { useRef } from "react";
// import Input from "../../input/Input";
// import Spacer from "../../spacer/spacer";
// import styles from "./BasePopup.module.scss";
// import * as coms from "./BasePopup_private";
// import useAppliedStates from "../../Hooks/useAppliedStates";
// import {
//   FormManager,
//   types,
//   validators,
//   VALIDATOR_OPTIONS,
// } from "../../_imports";
// import GeneralList from "../../Lists/GeneralList";
// import { ReactComponent as CloseIcon } from "../../../asset/icons/close-round.svg";

// import { FormValidator } from "../../../solutions/raw";

// function getStringedObject(obj: object): { [key: string]: string } {
//   const ans: { [key: string]: string } = {};
//   for (let i of Object.keys(obj)) {
//     ans[i] = "";
//   }
//   return ans;
// }

// function BasePopup({
//   setShow
// } : {
//   setShow : React.Dispatch<React.SetStateAction<boolean>>
// }) {
//   useEffect(() => {
//     const body = document.body as HTMLElement;
//     body.classList.add(styles.stopScrolling);
//     return () => body.classList.remove(styles.stopScrolling);
//   });

//   const isFormOk = useRef<boolean>(true);

//   const [pr_as_obj, pr_as_setter] = useAppliedStates<
//     coms.PriceRange,
//     types.inputValidation
//   >(new coms.PriceRange(-1, -1), {
//     hasError: false,
//     errMessage: [],
//   });

//   const priceRangeRef = useRef<{ [key: string]: string }>(
//     getStringedObject(new coms.PriceRange(-1, -1))
//   );

//   const updateRef = (key: string) => {
//     return (e: React.ChangeEvent<HTMLInputElement>) => {
//       e.preventDefault();
//       priceRangeRef.current[key] = e.target.value;
//     };
//   };

//   const manager = new FormManager<{ [key: string]: string }, VALIDATOR_OPTIONS>(
//     pr_as_setter,
//     priceRangeRef,
//     validators,
//     isFormOk
//   );

//   const [currentColor, setCurrentColor] = useState(-1);


//   return (
//     <>
//       <div className={styles.overLay} ></div>
//       <div className={styles.container} >
//         <div className={styles.wrapper}>
//           <div className={styles.circleDecorator} />

//           {/* main content starts */}

//           <div className={styles.headingRow}>
//             <h2 className={styles.cardHeading + " bold display"}>Filters</h2>
//             <CloseIcon className={styles.closeIcon} onClick={() => setShow(false)} />
//           </div>
//           <div className={styles.spacer}></div>

//           <div className={styles.filterWidgetContainer}>
//             <coms.FilterLabels heading="Price Range - " />
//             <Spacer offset={14} />
//             <div className="plainRow">
//               <Input
//                 inputParams={{
//                   onChange: updateRef("rangeStart"),
//                   type: "number",
//                   className: styles.inputStyles,
//                 }}
//                 hasError={pr_as_obj["rangeStart"].hasError}
//                 width={87}
//                 offset={4}
//                 err={{
//                   errMessage: pr_as_obj["rangeStart"].errMessage,
//                   errStyles: {
//                     para: {
//                       color: "red",
//                       fontSize: 10,
//                     },
//                     input: {
//                       borderColor: "red",
//                     },
//                   },
//                 }}
//                 divStyles={{
//                   marginLeft: 4,
//                   marginRight: 4,
//                 }}
//               />
//               <p className={styles.inputSeparatorText}>to</p>
//               <Input
//                 inputParams={{
//                   onChange: updateRef("rangeEnd"),
//                   type: "number",
//                   className: styles.inputStyles,
//                 }}
//                 hasError={pr_as_obj["rangeEnd"].hasError}
//                 width={87}
//                 offset={4}
//                 err={{
//                   errMessage: pr_as_obj["rangeEnd"].errMessage,
//                   errStyles: {
//                     para: {
//                       color: "red",
//                       fontSize: 10,
//                     },
//                     input: {
//                       borderColor: "red",
//                     },
//                   },
//                 }}
//                 divStyles={{
//                   marginLeft: 4,
//                   marginRight: 4,
//                 }}
//               />
//             </div>
//             <Spacer offset={30} />
//             <coms.FilterLabels heading="Colors" />
//             <GeneralList<string>
//               batch={[
//                 "red",
//                 "blue",
//                 "pink",
//                 "lightgreen",
//                 "yellow",
//                 "gold",
//                 "brown",
//               ]}
//               renderMethod={function (
//                 val: string,
//                 index: number,
//                 array: string[]
//               ): React.ReactNode {
//                 return (
//                   <coms.ColorSelection
//                     activeStyle={{ backgroundColor: "#f2f2f2" }}
//                     colorName={val}
//                     key={index}
//                     id={index}
//                     currentSelection={currentColor}
//                     setSelection={setCurrentColor}
//                   />
//                 );
//               }}
//               listContainerStyle={undefined}
//             />
//           </div>
//           <Spacer offset={30} />
//           <div
//             className={styles.submitButton}
//             onClick={() => {
//               manager.validate("rangeStart", [
//                 VALIDATOR_OPTIONS.isPresent,
//                 VALIDATOR_OPTIONS.isNumber,
//               ]);
//               manager.validate("rangeEnd", [
//                 VALIDATOR_OPTIONS.isPresent,
//                 VALIDATOR_OPTIONS.isNumber,
//               ]);

//               if (isFormOk.current) {
//                 const finalObj = new coms.PriceRange();
//                 finalObj.rangeEnd = parseInt(priceRangeRef.current["rangeEnd"]);
//                 finalObj.rangeStart = parseInt(
//                   priceRangeRef.current["rangeStart"]
//                 );
//                 if (finalObj.rangeEnd <= finalObj.rangeStart)
//                   alert("enter a valid range");
//                 console.log(finalObj);
//               }
//             }}
//           >
//             <p className="regular">submit</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BasePopup;
export {}; 