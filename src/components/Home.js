import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { Link } from "react-router-dom";
import BettingCalculator from "./BettingCalculator";

const Home = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 text-center">The Underdog</h1>
          <p className="lead text-center">
            Welcome To The Underdog. Here At The Underdog, We NEVER Bet On The
            Heavy Favorite. We Only Ride With The Biggest Dogs
          </p>
        </Container>
      </Jumbotron>

      <Link to="/login">Log In</Link>
      <br></br>
      <Link to="/signup">Sign Up</Link>
      <BettingCalculator />
    </div>
  );
};

export default Home;
