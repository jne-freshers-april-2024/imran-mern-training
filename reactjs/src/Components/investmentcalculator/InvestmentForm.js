import React from "react";
import "./inverment.css";
import { useState } from "react";

const data = {
  currentsaving: 10000,
  yearlycontribution: 5000,
  expectedReturn: 7,
  duration: 10,
};
const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState(data);

  const onSubmitData = (event) => {
    event.preventDefault();
    props.calculateData(userInput);
    setUserInput(data);
  };

  const onClickReset = (event) => {
    setUserInput(data);
  };

  const onChangeHandeler = (name, value) => {
    setUserInput((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={onSubmitData} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings Rs</label>
          <input
            onChange={(event) =>
              onChangeHandeler("currentsaving",event.target.value)
            }
            value={userInput.currentsaving}
            type="number"
            id="currentsaving"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings Rs</label>
          <input
            onChange={(event) =>
              onChangeHandeler("yearlycontribution", event.target.value)
            }
            value={userInput.yearlycontribution}
            type="number"
            id="yearlycontribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              onChangeHandeler("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
            type="number"
            id="expectedReturn"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              onChangeHandeler("duration", event.target.value)
            }
            value={userInput.duration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={onClickReset} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;

