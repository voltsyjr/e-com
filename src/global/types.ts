import React from "react";

type optionButtonProp = {
  id: number;
  action: (id: number) => any;
  children?: React.ReactNode;
  focus: boolean;
};

class buttonParam {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}

interface ProductCard {
  imgSrc: string;
  desc: {
    name: string;
    price: number;
  };
  style?: object;
}

type AppliedStatesObject<S> = {
  [keys: string]: S;
};

type validator = (input: any) => inputValidation;

type inputValidation = {
  hasError : boolean, 
  errMessage : string[]
}

export {
  type optionButtonProp,
  buttonParam,
  type ProductCard,
  type AppliedStatesObject,
  type validator, 
  type inputValidation
};
