import React from "react";
import UpcomingGames from "../components/UpcomingGames";
import { connect } from "react-redux";
import { fetchUpcomingGames } from "../actions/fetchUpcomingGames";
import LoadingSpinner from "../components/LoadingSpinner";

class UpcomingGamesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUpcomingGames();
  }

  render() {
    if (this.props.upcoming.length === 0) {
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
          <UpcomingGames upcoming={this.props.upcoming.data} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    upcoming: state.upcoming,
  };
};

export default connect(mapStateToProps, { fetchUpcomingGames })(
  UpcomingGamesContainer
);
