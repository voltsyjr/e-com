import React from 'react'; 
import style from './baseLabel.module.scss'; 

type baesLabelParams = {
  onClick : React.MouseEventHandler<HTMLDivElement>, 
  text ?: string, 
  fill : boolean, 
  style ?: object 
}

function BaseLabel(props : baesLabelParams) {
  return (
    <div className={style.container + " " + (props.fill === false ? style.outlineStyle : "")} onClick={props.onClick}>
      <p className={style.text + " medium"} >filters</p>
    </div>
  )
}

export default React.memo(BaseLabel)