import React from "react";
import News from "../components/News";
import { connect } from "react-redux";
import { fetchSportsNews } from "../actions/fetchSportsNews";
import LoadingSpinner from "../components/LoadingSpinner";

class NewsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchSportsNews();
  }

  render() {
    if (this.props.sportsnews.length === 0) {
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
          <News sportsnews={this.props.sportsnews} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    sportsnews: state.sportsnews,
  };
};

export default connect(mapStateToProps, { fetchSportsNews })(NewsContainer);
