import React, { useState } from "react";
import Button from "./ButtonDay05";
import './UnderstandReactLifeCycle.css'

const ReactLifeCycle = ()=>{
     const[showPara,setShowPara] = useState(false)
     console.log("Inside ReactLifeCycle....")
     const onConformHandler = ()=>{
          setShowPara((prevshowPara)=>!prevshowPara)
     }
    return (
         <div className="app">
             <h1>Understand React Life Cycle</h1>
             { showPara && <p style={{color:"green"}}>New Para Inserted</p>}
            <Button onConform={onConformHandler}>Click Me!</Button>
         </div>
    )
}
export default ReactLifeCycle
