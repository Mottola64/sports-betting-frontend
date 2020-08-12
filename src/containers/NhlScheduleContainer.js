import React from "react";
import NhlSchedule from "../components/NhlSchedule";
import { connect } from "react-redux";
import {fetchNhlSchedule} from '../actions/fetchNhlSchedule'
import LoadingSpinner from "../components/LoadingSpinner";

class NhlScheduleContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNhlSchedule();
  }

  render() {
    if (this.props.nhlschedule.length === 0) {
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
          <NhlSchedule nhlschedule={this.props.nhlschedule} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    nhlschedule: state.nhlschedule,
  };
};

export default connect(mapStateToProps, { fetchNhlSchedule })(NhlScheduleContainer);
