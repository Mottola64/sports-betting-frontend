import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";
import UpcomingGames from "./containers/UpcomingGames";
import "./App.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let myStore = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={myStore}>
          <UpcomingGames />
        </Provider>
        Welcome To Mike's Betting Site!
      </div>
    );
  }
}

export default App;
