import React from "react";
import Card from "./Card";
import Button from "./Button";
const ErrorHandler = (props) => {
  return (
    <div onClick={props.onConform}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button onClick={props.onConform}>Okay</Button>
      </footer>
    </div>
  );
};

export default ErrorHandler;

