import React from "react";
import './Box.css'


 const BoxComponent = (props) =>{
     return(
         <div className="card">{props.children}</div>
     )
 } 

 export default BoxComponent;