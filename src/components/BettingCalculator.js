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

  handleSubmitMoneyline = (e) => {
    e.preventDefault();
    var moneyline = oddslib.from("decimal", this.state.value).to("moneyline");

    console.log(moneyline);
    this.setState({
      moneyline: moneyline,
    });
  };
  handleSubmitDecimal = (e) => {
    e.preventDefault();
    var decimal = oddslib.from("moneyline", this.state.value).to("decimal");

    console.log(decimal);
    this.setState({
      decimal: decimal,
    });
  };

  render() {
    return (
      <div>
        <h1>Betting Calculator</h1>
        <div>
          <h4>Convert Decimal To Moneyline Odds</h4>
          <form onSubmit={this.handleSubmitMoneyline.bind(this)}>
            <input
              type="number"
              value={this.state.value}
              placeholder="Decimal"
              onChange={this.handleChange}
            />
            <input type="submit" value="Convert" />
            <br></br>
            <p>{this.state.moneyline}</p>
          </form>
        </div>
        <div>
          <h4>Convert Moneyline To Decimal Odds</h4>
          <form onSubmit={this.handleSubmitDecimal.bind(this)}>
            <input
              type="number"
              value={this.state.value}
              placeholder="Moneyline"
              onChange={this.handleChange}
            />
            <input type="submit" value="Convert" />
            <br></br>
            <p>{this.state.decimal}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default BettingCalculator;
