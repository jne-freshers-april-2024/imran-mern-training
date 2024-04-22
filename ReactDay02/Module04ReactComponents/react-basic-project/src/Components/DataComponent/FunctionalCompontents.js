import { useEffect, useState } from "react";
import React from "react";
import EmployeeDataDisplay from "./EmlpoyeeDataCompontent";

const functionalComponets = () => {
  const [variable, setVariable] = useState(0);
  const date = new Date();
  const EmployeeData = {
    name: "imran",
    company: "Thinkitive Technologies",
    location: "Baner Pune",
    date:date
  };
  useEffect(() => {
    document.title = `you click ${variable} times`;
  }, [variable]);

  return (
    <div>
      <h3>Todays Date : {date.toISOString()}</h3>

      <div>
        <h1>Employee Details </h1>
        <EmployeeDataDisplay emp={EmployeeData}></EmployeeDataDisplay>
      </div>
      <h1> Variable : {variable}</h1>
      <button onClick={() => setVariable(variable + 1)}>Increase Count</button>
      <button
        onClick={() => setVariable(variable - 1)}
        disabled={variable == 0}>Decrease Count</button>
    </div>
  );
};

export default functionalComponets;
