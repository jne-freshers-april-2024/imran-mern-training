import React from "react";
import HeaderInvestmentCal from "./HeaderInvestmentCal";
import InvestmentForm from "./InvestmentForm";
import InvestmentTable from "./InvestmentTable";
import { useState } from "react";

const MainInvestment = () => {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];
  
  if(userInput){
    let currentSavings = userInput['currentsaving'];
    const yearlyContribution = userInput['yearlycontribution'];
    const expectedReturn = userInput['expectedReturn'] / 100;
    const duration = userInput['duration'];

    for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
  }
 
  return (
    <div>
      <HeaderInvestmentCal />
      <InvestmentForm calculateData={calculateHandler} />
      {!userInput &&  <p style={{textAlign:'center'}}>Investment not calculated yet!</p>}
      {userInput &&  <InvestmentTable data={yearlyData} intialInvestment={userInput['currentsaving']}/>}
    </div>
  );
};

export default MainInvestment;
