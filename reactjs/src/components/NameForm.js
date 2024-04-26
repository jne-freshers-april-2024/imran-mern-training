import React from "react";
import "./Style.css";
import useInputValid from "../hooks/inputvalid";

const NameForm = () => {

  const {
    value: enteredName,
    isValid:enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangedHandler: nameChangeHandler,
    inputBlureHandler: nameBlureHandler,
    reset:resetNameInput
  } = useInputValid(value=>value.trim()!=="");


  let isformValid = false;

  if (enteredNameIsValid) {
    isformValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    if (!enteredNameIsValid) {
      return;
    }
    resetNameInput();
  };

  const fieldValidatClass = nameInputHasError ? "invalid" : "valid";

  return (
    <div className="div">
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className={fieldValidatClass}
            id="name"
            value={enteredName}
            name="name"
            onBlur={nameBlureHandler}
            onChange={nameChangeHandler}
          ></input>
        </div>
        {nameInputHasError && <p style={{ color: "red" }}>Name is Required..</p>}
        <button disabled={!isformValid} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NameForm;

