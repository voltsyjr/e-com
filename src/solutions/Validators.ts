import * as types from "../global/types";
import { HashSet } from "../std_com/_imports";

//* the validators
function isNumber(input: string): types.inputValidation {
  let res: types.inputValidation = {
    hasError: false,
    errMessage: [],
  };

  let convertion = parseInt(input);
  if (Number.isNaN(convertion)) {
    res.hasError = true;
    res.errMessage = ["input is not a number"];
  }

  return res;
}

function isPresent(input: any | undefined): types.inputValidation {
  let res: types.inputValidation = {
    hasError: false,
    errMessage: [],
  };
  if (
    input === undefined ||
    input === null ||
    input === -1 ||
    input.length === 0
  ) {
    res.hasError = true;
    res.errMessage = ["input is empty"];
  }

  return res;
}

//* the hash map enum
enum VALIDATOR_OPTIONS {
  isPresent = "isPresent",
  isNumber = "isNumber",
}

//* the hash map object
const validators = new HashSet<types.validator>();

//! configuring the hash
validators.set(VALIDATOR_OPTIONS.isNumber, isNumber);
validators.set(VALIDATOR_OPTIONS.isPresent, isPresent);

//* exports
export { validators, VALIDATOR_OPTIONS };
