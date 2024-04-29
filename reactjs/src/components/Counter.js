import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Counter";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const toggleHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div className="div">
      <h3>Redux-Counter</h3>
      {showCounter && <h1>{counter}</h1>}
      <button onClick={toggleHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increseHandler}>IncreaseBy5</button>
    </div>
  );
};

export default Counter;

