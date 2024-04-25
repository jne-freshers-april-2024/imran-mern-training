import React, { useState, useCallback } from "react";
import Button from "./ButtonDay05";
import './UnderstandReactLifeCycle.css'
import Childcomponent from "./ChildComponent";

const ReactLifeCycle = ()=>{
     const[showPara,setShowPara] = useState(false)

     console.log("Inside ReactLifeCycle....")

     const onConformHandler =useCallback(()=>{
          console.log("inside function")
          setShowPara((prevshowPara)=>!prevshowPara)
     })
    return (
         <div className="app">
             <h1>Understand React Life Cycle</h1>
             {/* { showPara && <p style={{color:"green"}}>New Para Inserted</p>} */}
             <Childcomponent showPara={false}/>
            <Button onConform={onConformHandler}>Click Me!</Button>
         </div>
    )
}
export default ReactLifeCycle

