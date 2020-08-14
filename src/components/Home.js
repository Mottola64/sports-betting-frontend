import React from "react";
import { Jumbotron, Container } from "reactstrap";
import NewsContainer from "../containers/NewsContainer";
import "../index.css";

const Home = () => {
  return (
    <div>
      <Jumbotron
        fluid
        style={{
          border: "3px",
          borderColor: "#00b541",
          backgroundColor: "#242424",
          color: "#00b541",
        }}
        className="Jumbotron"
      >
        <Container fluid>
          <h1 className="display-3">
            <strong>The Underdog</strong>
          </h1>
          <p className="lead">
            <strong>
              Welcome To The Underdog. Here At The Underdog, We NEVER Bet On The
              Heavy Favorite. We Only Ride With The Biggest Dogs
            </strong>
          </p>
        </Container>
      </Jumbotron>

      <NewsContainer />
    </div>
  );
};

export default Home;
