import React from "react";
import { Jumbotron, Container } from "reactstrap";
import BettingCalculator from "./BettingCalculator";

const Home = () => {
  return (
    <div>
      <Jumbotron className="Jumbotron">
        <Container className="Jumbotron">
          <h1>The Underdog</h1>
          <p>
            Welcome To The Underdog. Here At The Underdog, We NEVER Bet On The
            Heavy Favorite. We Only Ride With The Biggest Dogs
          </p>
        </Container>
      </Jumbotron>

      <BettingCalculator />
    </div>
  );
};

export default Home;
