import React from "react";

import styles from "Input.module.scss";

type InputParams = {
  inputParams: React.InputHTMLAttributes<HTMLInputElement>;
  paraParams?: React.InputHTMLAttributes<HTMLParagraphElement>;
  hasError: boolean;
  err: {
    errMessage: string[];
    errStyles: {
      input: React.CSSProperties;
      para: React.CSSProperties;
    };
  };
  divStyles?: React.CSSProperties;
  width: number;
  offset: number;
};

function Input(props: InputParams) {
  
  return (
    <div style={{...props.divStyles, maxWidth : props.width}}>
      <input
        {...props.inputParams}
        style={
          props.hasError ? props.err.errStyles.input : props.inputParams.style
        }
      />
      {props.hasError && <div style={{ height: props.offset }} />}
      <p
        {...props.paraParams}
        style={
          props.hasError ? props.err.errStyles.para : props.paraParams?.style
        }
      >
        {props.hasError ? (() => {
          let concatenated = ""; 
          props.err.errMessage.map(str => concatenated += str + " ")
          return concatenated;  
        })() : ""}
      </p>
    </div>
  );
}

export default Input;
