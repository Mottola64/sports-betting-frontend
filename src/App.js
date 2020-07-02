import React from "react";
import UpcomingGames from './containers/UpcomingGames'
import "./App.css";

console.log(process.env.REACT_APP_API_KEY);

function App() {
  return <div className="App">Welcome To Mike's Betting Site!
  <UpcomingGames />
  </div>;
}

export default App;
