import { useState } from "react";

export default function InvestmentForm({ onCalculate }) {
  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 10,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: +value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(input);
  };

  return (
    <form id="user-input" onSubmit={handleSubmit}>
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={input.initialInvestment}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            name="annualInvestment"
            value={input.annualInvestment}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return (%)</label>
          <input
            type="number"
            required
            name="expectedReturn"
            value={input.expectedReturn}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Duration (years)</label>
          <input
            type="number"
            required
            name="duration"
            value={input.duration}
            onChange={handleChange}
          />
        </p>
      </div>
      <p className="center">
        <button type="submit">Calculate</button>
      </p>
    </form>
  );
}
