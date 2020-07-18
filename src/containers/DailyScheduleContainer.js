import React from "react";
import DailySchedule from "../components/DailySchedule";
import { connect } from "react-redux";
import {fetchDailySchedule} from '../actions/fetchDailySchedule'
import LoadingSpinner from "../components/LoadingSpinner";

class DailyScheduleContainer extends React.Component {
  componentDidMount() {
    this.props.fetchDailySchedule();
  }

  render() {
    if (this.props.dailyschedule.length === 0) {
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
          <DailySchedule dailyschedule={this.props.dailyschedule} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dailyschedule: state.dailyschedule,
  };
};

export default connect(mapStateToProps, { fetchDailySchedule })(DailyScheduleContainer);
