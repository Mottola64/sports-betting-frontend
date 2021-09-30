import React from "react";
import NcaabOdds from "../components/NcaabOdds";
import { connect } from "react-redux";
import { fetchNcaabOdds } from "../actions/fetchNcaabOdds";
import LoadingSpinner from "../components/LoadingSpinner";

class NcaabContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNcaabOdds();
  }

  render() {
    if (this.props.ncaabodds.length === 0) {
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
          <NcaabOdds ncaabodds={this.props.ncaabodds} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ncaabodds: state.ncaabodds,
  };
};

export default connect(mapStateToProps, { fetchNcaabOdds })(NcaabContainer);
