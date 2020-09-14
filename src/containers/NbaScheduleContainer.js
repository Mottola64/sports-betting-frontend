import React from "react";
import NbaSchedule from "../components/NbaSchedule";
import NbaResults from '../components/NbaResults'
import { connect } from "react-redux";
import {fetchNbaSchedule} from '../actions/fetchNbaSchedule'
import {fetchNbaResults} from '../actions/fetchNbaResults'
import LoadingSpinner from "../components/LoadingSpinner";

class NbaScheduleContainer extends React.Component {
  
  componentDidMount() {
    // this.props.fetchNbaSchedule();
    this.props.fetchNbaResults()
  }

  render() {
    if (this.props.nbaschedule.length === 0 && this.props.nbaresults.length === 0) {
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
          <NbaSchedule nbaschedule={this.props.nbaschedule} />
          <NbaResults nbaresults={this.props.nbaresults} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    nbaschedule: state.nbaschedule,
    nbaresults: state.nbaresults
  };
};

export default connect(mapStateToProps, { fetchNbaSchedule, fetchNbaResults })(NbaScheduleContainer);
