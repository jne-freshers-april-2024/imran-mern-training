import React from "react";
import "./inverment.css";

const InvestmentForm = (props) => {
   const formatter = new Intl.NumberFormat('en-IN',{
      style:'currency',
      currency:'INR',
      minimumFractionDigits:2,
      maximumFractionDigits:2

   })
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearData) => {
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                <td>{formatter.format(yearData.yearlyInterest)}</td>
                <td>
                  {formatter.format(yearData.savingsEndOfYear -
                    props.intialInvestment -
                    yearData.yearlyContribution * yearData.year)}
                </td>
                <td>
                  {formatter.format(props.intialInvestment +
                    yearData.yearlyContribution * yearData.year)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentForm;

