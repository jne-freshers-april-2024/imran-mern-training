import { useEffect , useState } from "react";
import React from "react";


const functionalComponets = ()=>{
      const [variable , setVariable] = useState(0);

      useEffect(()=>{
          document.title = `you click ${variable} times`;
     
      },[variable])

      return(
          <div>
              <p> Variable : {variable}</p>
              <button onClick={()=>setVariable(variable+1)}>Increase Count</button>
              <button onClick={()=>setVariable(variable-1)} disabled={variable==0}>Decrease Count</button>
          </div>
      )
};

export default functionalComponets;