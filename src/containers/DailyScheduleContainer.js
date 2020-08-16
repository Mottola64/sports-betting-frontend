import React from "react";
import DailySchedule from "../components/DailySchedule";
import { connect } from "react-redux";
import { fetchDailySchedule } from "../actions/fetchDailySchedule";
import { fetchMlbOdds } from "../actions/fetchMlbOdds";
import LoadingSpinner from "../components/LoadingSpinner";

class DailyScheduleContainer extends React.Component {
  componentDidMount() {
    this.props.fetchDailySchedule();
    this.props.fetchMlbOdds();
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
          <DailySchedule
            dailyschedule={this.props.dailyschedule}
            mlbodds={this.props.mlbodds}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dailyschedule: state.dailyschedule,
    mlbodds: state.mlbodds,
  };
};

export default connect(mapStateToProps, { fetchDailySchedule, fetchMlbOdds })(
  DailyScheduleContainer
);
