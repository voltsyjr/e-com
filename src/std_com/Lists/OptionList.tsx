import React, { useState, useEffect } from "react";
import "./OptionList.scss"
import ButtonOption from "../Button/ButtonOption";
import { types } from "../_imports";

type prop = {
  batch: Array<types.buttonParam>;
  setCurrentSelected: React.Dispatch<React.SetStateAction<any>>;
  currentSelected: number;
};

/*
  supplies id, focus, action to the button redered as list 
*/
function  OptionList(prop: prop) {
  const needInvisible: boolean = prop.batch.length % 2 !== 0;

  return (
    <div className="optionList">
      {prop.batch.map((val, index) => { 
        return (
          <ButtonOption
            id={index}
            key={index}
            focus={index === prop.currentSelected}
            action={(id) => {
              if(prop.currentSelected === id) {
                prop.setCurrentSelected(-1); 
              } else {
                prop.setCurrentSelected(id); 
              }
              // console.log(prop.currentSelected, id, index); 
            }}
          >
            {val.message}
          </ButtonOption>
        );
      })}
      {
        needInvisible && <div className="dummy"></div>
      }
    </div>
  );
}

export default OptionList;
