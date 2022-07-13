import React from 'react'
import {motion} from 'framer-motion'; 

function ClickRotation({
  children, 
  trigger
} : {children : React.ReactNode, trigger : boolean}) {
  console.log(trigger); 
  return (
    <motion.div animate={trigger ? {rotate : 360} : {rotate : 359}} >{children}</motion.div>
  )
}

export default ClickRotation