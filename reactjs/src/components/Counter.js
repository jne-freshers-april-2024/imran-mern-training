import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Style.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {
    console.log("toggle");
  };

  return (
    <div className="div">
      <h2>{counter}</h2>
      <button onClick={toggleCounterHandler}>Counter</button>
    </div>
  );
};
export default Counter;

