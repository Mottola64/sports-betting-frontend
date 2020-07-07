import React from "react";
import oddslib from "oddslib";

class BettingCalculator extends React.Component {
  state = { value: "" };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var odds = oddslib.from("decimal", e).to("moneyline");

    console.log(odds);
    return odds;
  };

  render() {
    return (
      <div>
        <h1>Betting Calculator</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.value}
            placeholder="Decimal"
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        {/* <form>
          <select>
            <option value="moneyline">American Odds</option>
            <option selected value="decimal">
              Decimal Odds
            </option>
          </select>
          <input type="text" value="" />
          <button onSubmit={this.oddslib} />
        </form> */}
      </div>
    );
  }
}

export default BettingCalculator;
