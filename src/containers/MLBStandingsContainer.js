import React from "react";
import MLBStandings from "../components/MLBStandings";
import { connect } from "react-redux";
import { fetchMlbStandings } from "../actions/fetchMlbStandings";
import LoadingSpinner from "../components/LoadingSpinner";

class MLBStandingsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMlbStandings();
  }

  render() {
    if (this.props.mlbstandings.length === 0) {
      return (
        <div
          className="justify-content-center d-flex"
          style={{ backgroundColor: "white" }}
        >
          <LoadingSpinner />
        </div>
      );
    } else {
      return (
        <div>
          <MLBStandings mlbstandings={this.props.mlbstandings} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    mlbstandings: state.mlbstandings,
  };
};

export default connect(mapStateToProps, { fetchMlbStandings })(MLBStandingsContainer);
