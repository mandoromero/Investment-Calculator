import { formatter } from "../util/investment";

export default function ResultsTable({ data, initialInvestment }) {
  const totalInterest = data.reduce((acc, year) => acc + year.interest, 0);
  const totalInvestment = initialInvestment + data.reduce((acc, year) => acc + year.annualInvestment, 0);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Invested</th>
        </tr>
      </thead>
      <tbody>
        {data.map((year) => {
          const totalInvested = initialInvestment + year.annualInvestment * year.year;
          return (
            <tr key={year.year}>
              <td>{year.year}</td>
              <td>{formatter.format(year.valueEndOfYear)}</td>
              <td>{formatter.format(year.interest)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2">Totals</td>
          <td>{formatter.format(totalInterest)}</td>
          <td>{formatter.format(totalInvestment)}</td>
        </tr>
      </tfoot>
    </table>
  );
}
