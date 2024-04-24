import React from "react";
import { useEffect, useState } from "react";
import AuthContext from "../Context/authContext";
const Login = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    console.log("inside use Effect...");
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <AuthContext.Provider>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
          ></input>
        </div>
        <button>Submit</button>
      </form>
      </AuthContext.Provider>
  );
};

export default Login;

