import React, { InputHTMLAttributes, useEffect, useState, useRef } from "react";

interface InputParams extends InputHTMLAttributes<HTMLInputElement> {
  validatorList?: ((strInput: string, numInput?: number) => boolean)[];
  style?: object;
  collector?: React.SetStateAction<string>;
}

const customEvent = new CustomEvent("clicked"); 

function Input(params: InputParams) {
  const [inputData, setInputData] = useState<string>("");
  const inputRef = useRef(''); 
 
  useEffect(() => {
    if (params.validatorList === undefined) {
      return () => {};
    }

    let verdict = true;
    for (let f of params.validatorList) {
      if (f(inputData) === false) {
        verdict = false;
        break;
      }
    }
  }, [inputData]);

  return (
    <input
      type={params.type}
      onChange={(e) => setInputData(e.target.value)}
      style={{
        ...params.style,
        borderBottom: "1px solid red",
      }}
      className={params.className}
      value={inputData}
    />
  );
}

export default Input;
