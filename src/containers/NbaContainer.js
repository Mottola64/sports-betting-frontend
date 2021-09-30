import React from "react";
import NbaOdds from "../components/NbaOdds";
import { connect } from "react-redux";
import { fetchNbaOdds } from "../actions/fetchNbaOdds";
import LoadingSpinner from "../components/LoadingSpinner";


class NbaContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNbaOdds();
  }

  render() {
    if (this.props.nbaodds.length === 0) {
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
          <NbaOdds nbaodds={this.props.nbaodds} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    nbaodds: state.nbaodds,
  };
};

export default connect(mapStateToProps, { fetchNbaOdds })(
  NbaContainer
);
