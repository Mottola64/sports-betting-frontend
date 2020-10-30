import React from "react";
import NcaafOdds from "../components/NcaafOdds";
import { connect } from "react-redux";
import { fetchNcaafOdds } from "../actions/fetchNcaafOdds";
import LoadingSpinner from "../components/LoadingSpinner";


class NcaafContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNcaafOdds();
  }

  render() {
    if (this.props.ncaafodds.length === 0) {
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
          <NcaafOdds ncaafodds={this.props.ncaafodds} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ncaafodds: state.ncaafodds,
  };
};

export default connect(mapStateToProps, { fetchNcaafOdds })(
  NcaafContainer
);
