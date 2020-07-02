import React from "react";
import UpcomingGames from '../components/UpcomingGames'
import { connect } from "react-redux";
import {fetchUpcomingGames} from '../actions/fetchUpcomingGames'

class UpcomingGamesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUpcomingGames();
  }

  render() {
    return (
      <div>
        {this.props.upcoming.length > 0 && (
      <UpcomingGames upcoming={this.props.upcoming}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      upcoming: state.upcoming,
    };
  };

export default connect(mapStateToProps, { fetchUpcomingGames })(UpcomingGamesContainer);
