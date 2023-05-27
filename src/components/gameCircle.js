import React from "react";

import "../index.css"

const GameCircle = ({ id, children, className ,oncircleClicked }) => {


  return (
    <div className={`"gameCircle w-20 h-20 border-2 border-black rounded-full m-1 " ${className}`} onClick={() => oncircleClicked(id)}>
      {children}
    </div>
  );
};




export default GameCircle;
