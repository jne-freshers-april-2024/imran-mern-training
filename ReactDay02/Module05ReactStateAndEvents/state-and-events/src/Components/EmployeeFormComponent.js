import React from "react";
import { useState } from "react";
import DataDisplayCompontent from "./DataDisplayCompontent";
const EmployeeFormComponent = () => {
  const [employee , setEmployee ]= useState([]);
  const [employeeData, setEmployeeData] = useState({
    name: "",
    company: "",
    location: "",
    salary: "",
  });

  const onInputDataChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    setEmployee([...employee,employeeData]);
    setEmployeeData(() => ({
      name: "",
      company: "",
      location: "",
      salary: "",
    }));
    
  };
  
  return (
      <div>
        <DataDisplayCompontent employee={employee}/>
      <form onSubmit={onSubmitForm}>
        <div>
          <label for="name">Name : </label>
          <input
            id="name"
            type="text"
            name="name"
            value={employeeData.name}
            onChange={onInputDataChange}
          ></input>
        </div>
        <div>
          <label for="company">Company : </label>
          <input
            id="company"
            type="text"
            name="company"
            value={employeeData.company}
            onChange={onInputDataChange}
          ></input>
        </div>
        <div>
          <label for="location">Location : </label>
          <input
            id="location"
            type="text"
            name="location"
            value={employeeData.location}
            onChange={onInputDataChange}
          ></input>
        </div>
        <div>
          <label for="salary">Salary : </label>
          <input
            id="salary"
            type="number"
            name="salary"
            value={employeeData.salary}
            onChange={onInputDataChange}
          ></input>
        </div>
        <button type="submit"> Submit Data</button>
      </form>
      
    </div>
  );
};

export default EmployeeFormComponent;
