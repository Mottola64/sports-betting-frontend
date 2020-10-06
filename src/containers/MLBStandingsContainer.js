import React from "react";
import MLBStandings from "../components/MLBStandings";
import { connect } from "react-redux";
import { fetchMlbStandings } from "../actions/fetchMlbStandings";
import LoadingSpinner from "../components/LoadingSpinner";
import {Container} from 'reactstrap'

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
        <Container fluid>
          <MLBStandings
            style={{ width: "100vw", height: "100vh" }}
            mlbstandings={this.props.mlbstandings}
          />
        </Container>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    mlbstandings: state.mlbstandings,
  };
};

export default connect(mapStateToProps, { fetchMlbStandings })(
  MLBStandingsContainer
);
