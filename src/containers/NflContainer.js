import React from "react";
import NflOdds from "../components/NflOdds";
import { connect } from "react-redux";
import { fetchNflOdds } from "../actions/fetchNflOdds";
import LoadingSpinner from "../components/LoadingSpinner";


class NflContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNflOdds();
  }

  render() {
    if (this.props.nflodds.length === 0) {
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
          <NflOdds nflodds={this.props.nflodds} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    nflodds: state.nflodds,
  };
};

export default connect(mapStateToProps, { fetchNflOdds })(
  NflContainer
);
