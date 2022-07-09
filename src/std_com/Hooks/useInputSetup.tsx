import React, { useState, useRef } from "react";

function useInputSetup(): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  React.MutableRefObject<HTMLInputElement>
] {
  const [inputData, setInputData] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null!);

  return [inputData, setInputData, inputRef];
}

export default useInputSetup;
