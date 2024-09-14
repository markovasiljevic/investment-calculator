import { formatter } from "../util/investment";
export default function Result({ arrayOfData }) {
  const initialInvestment =
    arrayOfData[0].valueEndOfYear -
    arrayOfData[0].interest -
    arrayOfData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest (Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {arrayOfData.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;
            const totalAmountInvested=item.valueEndOfYear-totalInterest;
          return (
            <tr key={item.year}>
              <th scope="row">{item.year}</th>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
