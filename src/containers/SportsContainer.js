import React from "react";
import Sports from "../components/Sports";
import { connect } from "react-redux";
import { fetchSports } from "../actions/fetchSports";
import LoadingSpinner from "../components/LoadingSpinner";

class SportsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchSports();
  }

  render() {
    if (this.props.sports.length === 0) {
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
          <Sports sports={this.props.sports.data} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    sports: state.sports,
  };
};

export default connect(mapStateToProps, { fetchSports })(
  SportsContainer
);
