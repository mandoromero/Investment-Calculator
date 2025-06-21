import Header from "./Components/Header.jsx";
import InvestmentForm from "./Components/InvestmentForm.jsx";
import ResultsTable from "./Components/ResultsTable.jsx";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

export default function App() {
  const [userInput, setUserInput] = useState(null);

  const handleCalculate = (input) => {
    setUserInput(input);
  };

  const results = userInput ? calculateInvestmentResults(userInput) : [];

  return (
    <>
      <Header id='header' />
      <InvestmentForm onCalculate={handleCalculate} />
      {!userInput && <p className="center">Please enter investment details.</p>}
      {userInput && results.length > 0 && (
        <ResultsTable
          data={results}
          initialInvestment={userInput.initialInvestment}
        />
      )}
    </>
  );
}
