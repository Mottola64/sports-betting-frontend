import React from "react";
import NewsContainer from "../containers/NewsContainer";
import "../index.css";

const Home = () => {
  return (
    <div>
      <header
        fluid
        
      >
        <div className="sm:text-xs md:text-sm lg:text-lg text-green-500 container mx-auto m-2" fluid>
          <h1>
            <strong>The Underdog</strong>
          </h1>
          <p>
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
