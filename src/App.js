import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import UpcomingGamesContainer from "./containers/UpcomingGamesContainer";
import upcoming from "./reducers/upcoming";
import "./App.css";

const reducer = combineReducers({
  upcoming,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let myStore = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Welcome To Mike's Betting Site!
        <Provider store={myStore}>
          <UpcomingGamesContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
