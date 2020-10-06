import React from "react";
import { connect } from "react-redux";
import { fetchMlbOdds } from "../actions/fetchMlbOdds";
import { fetchNbaOdds } from '../actions/fetchNbaOdds';
import LoadingSpinner from "../components/LoadingSpinner";
import MlbOdds from '../components/MlbOdds'
import NbaOdds from '../components/NbaOdds'

class OddsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMlbOdds();
    this.props.fetchNbaOdds();
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
        <div style={{marginTop: "20px"}} >
          <MlbOdds mlbodds={this.props.mlbodds} />
          <NbaOdds nbaodds={this.props.nbaodds} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    mlbodds: state.mlbodds,
    nbaodds: state.nbaodds,
  };
};

export default connect(mapStateToProps, { fetchMlbOdds, fetchNbaOdds })(OddsContainer);
