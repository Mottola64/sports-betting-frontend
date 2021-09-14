import React from "react";
import { Jumbotron, Container } from "reactstrap";
import NewsContainer from "../containers/NewsContainer";
import "../index.css";

const Home = () => {
  return (
    <div>
      <header
        fluid
        
      >
        <div className="container mx-auto" fluid>
          <h1>
            <strong>The Underdog</strong>
          </h1>
          <p className="lead">
            <strong>
              Welcome To The Underdog. Here At The Underdog, We NEVER Bet On The
              Heavy Favorite. We Only Ride With The Biggest Dogs
            </strong>
          </p>
        </div>
      </header>

      <NewsContainer />
    </div>
  );
};

export default Home;
