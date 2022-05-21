import React from "react";
import './ButtonCta.scss'

type prop = {
  message : string, 
  rightCom ?: any 
}

function ButtonCta(prop : prop) {
  return (
    <div className="cta">
      <p className="cta-text medium">{prop.message}</p>
      {
        prop.rightCom && <div className="rightCom"><prop.rightCom/></div>
      }
    </div>
  );
}

export default ButtonCta;
