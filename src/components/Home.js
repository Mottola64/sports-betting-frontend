import React from "react";
import { Jumbotron } from "reactstrap";
import NewsContainer from "../containers/NewsContainer";

const Home = () => {
  return (
    <div>
      <Jumbotron fluid className="Jumbotron">
        <h1 className="display-3 Jumbotron">The Underdog</h1>
        <p className="lead Jumbotron">
          Welcome To The Underdog. Here At The Underdog, We NEVER Bet On The
          Heavy Favorite. We Only Ride With The Biggest Dogs
        </p>
      </Jumbotron>

      <NewsContainer />
    </div>
  );
};

export default Home;
