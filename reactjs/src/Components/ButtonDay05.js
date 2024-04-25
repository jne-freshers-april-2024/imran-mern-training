import React from "react";
import './UnderstandReactLifeCycle.css'
const Button = (props) => {
  
  return (
   
    <button className="buttens" type="button" onClick={props.onConform}>
      {props.children}
    </button>
  );
};
export default Button;

