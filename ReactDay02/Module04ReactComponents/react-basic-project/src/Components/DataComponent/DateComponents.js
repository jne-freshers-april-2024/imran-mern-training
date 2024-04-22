import React from "react";



const DateComponents = (props)=>{
    console.log(props.date);
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    
    return (
          <div>
              <p1>{day} : {month} : {year}</p1>
          </div>
    )
}

export default DateComponents;