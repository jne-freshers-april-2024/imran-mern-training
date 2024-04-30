import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../storeday08/index";

import "./redux.css";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increseHandler = () => {
    dispatch(counterActions.increse(5));
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
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

