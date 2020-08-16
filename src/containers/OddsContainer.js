import React from "react";
import { connect } from "react-redux";
import { fetchMlbOdds } from "../actions/fetchMlbOdds";
import LoadingSpinner from "../components/LoadingSpinner";
import MlbOdds from '../components/MlbOdds'

class OddsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMlbOdds();
  }

  render() {
    if (this.props.nbaschedule.length === 0) {
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

export default connect(mapStateToProps, { fetchMlbOdds })(OddsContainer);
