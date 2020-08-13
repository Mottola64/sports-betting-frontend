import React from "react";
import NbaSchedule from "../components/NbaSchedule";
import { connect } from "react-redux";
import {fetchNbaSchedule} from '../actions/fetchNbaSchedule'
import LoadingSpinner from "../components/LoadingSpinner";

class NbaScheduleContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNbaSchedule();
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
        <div>
          <NbaSchedule nbaschedule={this.props.nbaschedule} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    nbaschedule: state.nbaschedule,
  };
};

export default connect(mapStateToProps, { fetchNbaSchedule })(NbaScheduleContainer);
