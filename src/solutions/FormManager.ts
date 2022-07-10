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
    React.SetStateAction<types.AppliedStatesObject<types.inputValidation>>
  >;
  private objectRef: React.MutableRefObject<T>;
  private validatorObject: HashSet<types.validator>;
  private guradRef: React.MutableRefObject<boolean>;

  constructor(
    verificationStateObjectSetter: React.Dispatch<
      React.SetStateAction<types.AppliedStatesObject<types.inputValidation>>
    >,
    objectRef: React.MutableRefObject<T>,
    validatorObject: HashSet<types.validator>,
    guradRef: React.MutableRefObject<boolean>
  ) {
    this.objectRef = objectRef;
    this.verificationStateObjectSetter = verificationStateObjectSetter;
    this.validatorObject = validatorObject;
    this.guradRef = guradRef; 
  }

  validate(key: string, options: ET[]) {
    let validationVerdict: types.inputValidation = {
      hasError: false,
      errMessage: [],
    };

    let hasError = false;

    for (let option of options) {
      let validator = this.validatorObject.get(option);
      if (validator !== null) {
        let validationResponse = validator(this.objectRef.current[key]);
        if (validationResponse.hasError === true) {
          validationVerdict = validationResponse;
          hasError = true;
          break;
        }
      }
    }

    this.guradRef.current = !hasError; 

    this.verificationStateObjectSetter((prev) => ({
      ...prev,
      [key]: validationVerdict,
    }));
  }

  isOk(): boolean {
    return this.guradRef.current;
  }

  toNumber(key: string) {
    this.verificationStateObjectSetter((prev) => {
      // console.log(key, parseInt(this.objectRef.current[key]));
      let copy = { ...prev };
      if (parseInt(this.objectRef.current[key]) === NaN) {
        copy[key].hasError = true;
        copy[key].errMessage.push("input is not a valid number");
        return copy;
      } else {
        this.objectRef.current[key] = parseInt(this.objectRef.current[key]);
        return prev;
      }
    });
  }
}
