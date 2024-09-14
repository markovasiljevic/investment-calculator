import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults, formatter } from "./util/investment";
import { useState } from "react";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  function updateValues(event) {
    const { name, value } = event.target;
    const newValue = value.trim(); // Uklanja praznine sa početka i kraja unosa
  
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: +newValue == "0" ? null : +newValue, // Postavlja vrednost na prazan string ako je vrednost 0
    }));
  }
  

  let isInputGood = false;
  if (
    inputValues.initialInvestment > 0 &&
    inputValues.annualInvestment > 0 &&
    inputValues.expectedReturn > 0 &&
    inputValues.duration > 0 &&
    inputValues.initialInvestment !=null &&
    inputValues.annualInvestment !=null &&
    inputValues.expectedReturn !=null &&
    inputValues.duration !=null
  ) {
    isInputGood = true;
  }

  const data = calculateInvestmentResults(inputValues);

  console.log(data);
  return (
    <>
      <UserInput handleChange={updateValues} inputValues={inputValues} />
      {isInputGood ? (
        <Result arrayOfData={data} />
      ) : (
        <p className="center">All fields must be greater than 0</p>
      )}
    </>
  );
}

export default App;
