import React from "react";
import { connect } from "react-redux";
import { fetchMlbOdds } from "../actions/fetchMlbOdds";
import { fetchNbaOdds } from '../actions/fetchNbaOdds';
import { fetchNflOdds } from '../actions/fetchNflOdds';
import LoadingSpinner from "../components/LoadingSpinner";
import MlbOdds from '../components/MlbOdds'
import NbaOdds from '../components/NbaOdds'
import NflOdds from '../components/NflOdds'
import {Container} from 'reactstrap'

class OddsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMlbOdds();
    this.props.fetchNbaOdds();
    this.props.fetchNflOdds();
  }

  render() {
    if (this.props.mlbodds.length === 0 && this.props.nbaodds.length === 0 && this.props.nflodds.length === 0) {
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
        <Container fluid>
          <MlbOdds mlbodds={this.props.mlbodds} />
          <NbaOdds nbaodds={this.props.nbaodds} />
          <NflOdds nflodds={this.props.nflodds} />
        </Container>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    mlbodds: state.mlbodds,
    nbaodds: state.nbaodds,
    nflodds: state.nflodds,
  };
};

export default connect(mapStateToProps, { fetchMlbOdds, fetchNbaOdds, fetchNflOdds })(OddsContainer);
