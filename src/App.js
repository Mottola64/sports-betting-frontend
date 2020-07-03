import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UpcomingGamesContainer from "./containers/UpcomingGamesContainer";
import SportsContainer from "./containers/SportsContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import upcoming from "./reducers/upcoming";
import sports from './reducers/sports'
import "./App.css";

const reducer = combineReducers({
  upcoming,
  sports,
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
        <Provider store={myStore}>
          <Router>
            <NavBar />
            <Switch>
              <Route path="/upcominggames" component={UpcomingGamesContainer} />
              <Route path="/sports" component={SportsContainer} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
