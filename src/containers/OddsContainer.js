import React from "react";
import { connect } from "react-redux";
import { fetchOdds } from "../actions/fetchOdds";
import LoadingSpinner from "../components/LoadingSpinner";

class OddsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchOdds();
  }

  render() {
    return <div>Odds</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    odds: state.odds,
  };
};

export default connect(mapStateToProps, { fetchOdds })(OddsContainer);
