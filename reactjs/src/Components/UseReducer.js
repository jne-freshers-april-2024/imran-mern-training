import { useReducer } from "react";
import React from "react";
import "./UseReducer.css";
const reducerFun = (state, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return { count: (state.count += 1) };
    case "DCREAMENT":
      return { count: (state.count -= 1) };
    case "RESET":
      return { count: (state.count = 0) };
    default:
      return;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducerFun, { count: 0 });
  const onClickReset = () => {
    dispatch({ type: "RESET" });
  };
  const onClickDecrement = () => {
    dispatch({ type: "DCREAMENT" });
  };

  const onClickIncreament = () => {
    dispatch({ type: "INCREAMENT" });
  };
  return (
    <div>
      <h2>Counter Varaible</h2>
      <p className="para">{state.count}</p>
      <button onClick={onClickIncreament}>Increament</button>
      <button onClick={onClickDecrement} disabled={state.count === 0}>
        Decreament
      </button>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
};
export default UseReducer;

