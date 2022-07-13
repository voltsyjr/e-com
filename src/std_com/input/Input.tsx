import React from "react";

import { types } from "../_imports";

type InputParams = {
  inputParams: React.InputHTMLAttributes<HTMLInputElement>;
  paraParams?: React.InputHTMLAttributes<HTMLParagraphElement>;
  err: types.InputValidationParameters;
  errStyles: {
    input: React.CSSProperties;
    para: React.CSSProperties;
  };
  divStyles?: React.CSSProperties;
  width: number;
  offset: number;
};

function Input(props: InputParams) {
  return (
    <div style={{ ...props.divStyles, maxWidth: props.width }}>
      <input
        {...props.inputParams}
        style={!props.err.isValid ? props.errStyles.input : {}}
      />
      {false && <div style={{ height: props.offset }} />}
      <p
        {...props.paraParams}
        style={
          !props.err.isValid ? props.errStyles.para : props.paraParams?.style
        }
      >
        {!props.err.isValid ? props.err.errMessage : ""}
      </p>
    </div>
  );
}

export default Input;
