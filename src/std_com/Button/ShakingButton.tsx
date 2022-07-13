import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function ShakingButton({
  children,
  className,
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
  className: string;
}) {
  
  const ref = useRef(0);
  return (
    <motion.div
      key={ref.current}
      // whileTap={{ scale:0.9 }}
      animate={ref.current === 0 ? {} : {
        x : [0, 10,-10,0]
      }}
      transition={{
        type: "spring",
      }}
      onClick={(e) => {
        onClick && onClick(e);
        ref.current++;
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ShakingButton;
