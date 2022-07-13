import React, { useState } from "react";
import {
  ObjectLiteral,
  InputValidationParameters,
  Validator,
} from "../global/types";

export class Hash<T extends string, D> {
  private state: ObjectLiteral<D> = {};
  private stateSetter: React.Dispatch<React.SetStateAction<ObjectLiteral<D>>>;
  constructor(
    state: ObjectLiteral<D>,
    stateSetter: React.Dispatch<React.SetStateAction<ObjectLiteral<D>>>
  ) {
    this.state = state;
    this.stateSetter = stateSetter;
  }

  get(key: T): D {
    return this.state[key];
  }

  set(key: T, data: D): void {
    this.stateSetter((prev) => {
      let newState = { ...prev };
      newState[key] = data;
      return newState;
    });
  }
}

export class FormValidator<T> {
  static BuildObject<R>(
    object: Object,
    filler: (val: string) => R
  ): ObjectLiteral<R> {
    const fields = Object.keys(object);
    let build: ObjectLiteral<R> = {};
    fields.forEach((val) => {
      build[val] = filler(val);
    });
    return build;
  }

  isValid() : boolean {
    let keys = Object.keys(this.validationObj); 

    if(keys.length === 0) return false; 
    else {
      for(let key of keys) {
        if(this.validationObj[key].isValid === false) return false; 
      }
      return true; 
    }
  }

  private obj_t : T; 
  private  dataHash: Hash<string, string>;
  private validationHash: Hash<string, InputValidationParameters>;
  private validationObj : ObjectLiteral<InputValidationParameters> = {}; 

  private ValidationCombinator(
    data: string,
    validators: Validator[]
  ): InputValidationParameters {
    let verdict = new InputValidationParameters();
    verdict.isValid = true;
    verdict.errMessage = "";
    for (let validator of validators) {
      verdict = validator(data);
      if (verdict.isValid === false) break;
    }
    return verdict;
  }

  constructor(
    dataHash: Hash<string, string>,
    validationHash: Hash<string, InputValidationParameters>
  ) {
    this.dataHash = dataHash;
    this.validationHash = validationHash;
  }


  validateOne(key: string, validators: Validator[]) {
    let verdict = this.ValidationCombinator(this.dataHash.get(key), validators); 
    this.validationObj[key] = verdict; 
    this.validationHash.set(
      key,
      verdict 
    );
  }

  validateMany(
    keys: string[],
    validators: Validator[],
    targetedValidator?: ObjectLiteral<Validator[]>
  ) {
    for (let key of keys) {
      let validatorList = validators;
      if (targetedValidator !== undefined) {
        let suppliedValidators = targetedValidator[key];
        if (suppliedValidators !== undefined) {
          validatorList = validatorList.concat(
            validatorList,
            suppliedValidators
          );
        }
      }
      this.validateOne(key, validatorList);
    }
  }

}
