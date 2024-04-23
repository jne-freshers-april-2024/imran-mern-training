import React from "react";
import DateComponents from "../DataComponent/DateComponents";
import BoxComponent from "../UI/BoxComponent";
const EmployeeDataDisplay = (props)=>{
    
  
    return(
        <div>
            <BoxComponent>
             <h2>name : {props.emp.name}</h2>
             <h3>compnay : {props.emp.company}</h3>
             <h4>location : {props.emp.location}</h4>
             <p1>Custome Date Format </p1>
             <DateComponents date = {props.emp.date}></DateComponents>
             </BoxComponent>
        </div>
    )
}

export default EmployeeDataDisplay;