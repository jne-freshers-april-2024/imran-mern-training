import React, { useState } from "react";
import "./CommonDay06.css";
const PostAPITest = () => {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    company: "",
    location: "",
  });

  const onChangeField = (event) => {
    const { name, value } = event.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const postRequest = async () => {
    try {
      const response = fetch(
        "https://react-js-98478-default-rtdb.firebaseio.com/employee.json",
        {
          method: "POST",
          body: JSON.stringify(employeeData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        new Error("something wents wrong");
      }
      const data = await JSON.stringify(response);
      console.log("data", data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    postRequest();
    setEmployeeData({
      name: "",
      company: "",
      location: "",
    });
  };

  return (
    <div className="div">
      <form onSubmit={onSubmitHandler}>
        <div>
          <label className="lable" htmlFor="name">Name</label>
          <input className="input"
            id="name"
            value={employeeData.name}
            name="name"
            onChange={onChangeField}
          ></input>
        </div>
        <div>
          <label className="lable" htmlFor="company">Company</label>
          <input className="input"
            id="company"
            value={employeeData.company}
            name="company"
            onChange={onChangeField}
          ></input>
        </div>
        <div>
          <label className="lable" htmlFor="location">location</label>
          <input className="input"
            id="location"
            value={employeeData.location}
            name="location"
            onChange={onChangeField}
          ></input>
        </div>
        <button className="button" style={{ padding: "0.23%" }} type="submit">
          Submit Data
        </button>
      </form>
    </div>
  );
};
export default PostAPITest;

