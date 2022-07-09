import React from "react";
import * as types from "../global/types";

import HashSet from "../dataStructures/Hash/HashSet.js";

export default class FormManager<T, ET extends string> {
  // will handle
  // validation -- done
  // transformation
  // stateSetting -- done

  // properties
  // applied states object
  private verificationStateObjectSetter: React.Dispatch<
    React.SetStateAction<
      types.AppliedStatesObject<types.inputValidation>
    >
  >;
  private objectRef: React.MutableRefObject<T>;
  private validatorObject: HashSet<types.validator>;

  constructor(
    verificationStateObjectSetter: React.Dispatch<
      React.SetStateAction<
        types.AppliedStatesObject<types.inputValidation>
      >
    >,
    objectRef: React.MutableRefObject<T>,
    validatorObject: HashSet<types.validator>
  ) {
    this.objectRef = objectRef;
    this.verificationStateObjectSetter = verificationStateObjectSetter;
    this.validatorObject = validatorObject;
  }

  validate(key: string, options: ET[]): void {
    // if (this.objectRef.current[key] === undefined) return;

    this.verificationStateObjectSetter((val) => {
      const verificationStateObject_copy = {...val};

      for(let option of options) {
        let validator = this.validatorObject.get(option); 
        if(validator !== null) {
          verificationStateObject_copy[key] = validator(this.objectRef.current[key]);
          // console.log("values from validate ::: ",option, verificationStateObject_copy); 
        }
      }
      return verificationStateObject_copy;
    });
  }
}
