import React from "react";
import './ButtonCta.scss'

type prop = {
  message : string, 
  rightCom ?: any, 
  onClick : (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

function ButtonCta(prop : prop) {
  return (
    <div className="cta" onClick = {prop.onClick && prop.onClick}>
      <p className="cta-text medium">{prop.message}</p>
      {
        prop.rightCom && <div className="rightCom"><prop.rightCom/></div>
      }
    </div>
  );
}

export default ButtonCta;
