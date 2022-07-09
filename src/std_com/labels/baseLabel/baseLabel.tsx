import React from 'react'; 
import style from './baseLabel.module.scss'; 

type baesLabelParams = {
  onClick : object, 
  text ?: string, 
  fill : boolean, 
  style ?: object 
}

function BaseLabel(props : baesLabelParams) {
  return (
    <div className={style.container + " " + (props.fill === false ? style.outlineStyle : "")}>
      <p className={style.text + " medium"} >filters</p>
    </div>
  )
}

export default React.memo(BaseLabel)