

export default function UserInput({handleChange,inputValues}) {
  
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          {" "}
          <label for="initialInvestment">INITIAL INVESTMENT</label>
          <input type="number" name="initialInvestment" value={inputValues.initialInvestment} onChange={handleChange} />
        </p>

        <p>
          {" "}
          <label for="initialInvestment">ANNUAL INVESTMENT</label>
          <input type="number" name="annualInvestment" value={inputValues.annualInvestment} onChange={handleChange}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          {" "}
          <label for="initialInvestment">EXPECTED RETURN</label>
          <input type="number" name="expectedReturn" value={inputValues.expectedReturn} onChange={handleChange}/>
        </p>
        <p>
          {" "}
          <label for="initialInvestment">DURATION</label>
          <input type="number" name="duration" value={inputValues.duration} onChange={handleChange}/>
        </p>
      </div>
    </div>
  );
}
