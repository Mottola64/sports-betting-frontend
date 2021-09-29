import React from "react";
import MlbOdds from "../components/MlbOdds";
import { connect } from "react-redux";
import { fetchMlbOdds } from "../../netlify/functions/actions/fetchMlbOdds";
import LoadingSpinner from "../components/LoadingSpinner";


class MlbContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMlbOdds();
  }

  render() {
    if (this.props.mlbodds.length === 0) {
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
          <MlbOdds mlbodds={this.props.mlbodds} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    mlbodds: state.mlbodds,
  };
};

export default connect(mapStateToProps, { fetchMlbOdds })(
  MlbContainer
);
