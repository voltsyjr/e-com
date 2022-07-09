import React, { useState } from "react";
import { types } from "../_imports";

export default function useAppliedStates<T, S>(
  object_t: T,
  initializer_s: S
): [
  types.AppliedStatesObject<S>,
  React.Dispatch<React.SetStateAction<types.AppliedStatesObject<S>>>
] {
  const stateObject: types.AppliedStatesObject<S> = {};

  for (let i of Object.keys(object_t)) {
    stateObject[i] = initializer_s;
  }

  return useState<types.AppliedStatesObject<S>>(stateObject);
}
