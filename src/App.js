import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewsContainer from "./containers/NewsContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import sports from "./reducers/sports";
import sportsnews from "./reducers/sportsnews";
import dailyschedule from "./reducers/dailyschedule";
import mlbstandings from "./reducers/mlbstandings";
import nbaschedule from "./reducers/nbaschedule";
import nbaresults from "./reducers/nbaresults";
import mlbodds from "./reducers/mlbodds";
import nbaodds from "./reducers/nbaodds";
import nflodds from "./reducers/nflodds";
import "./App.css";
import MlbContainer from "./containers/MlbContainer";
import OddsContainer from "./containers/OddsContainer";
import MLBStandingsContainer from "./containers/MLBStandingsContainer";
import NbaContainer from "./containers/NbaContainer";
import NflContainer from "./containers/NflContainer";
import { BreakpointProvider } from "react-socks";

const reducer = combineReducers({
  sports,
  sportsnews,
  dailyschedule,
  mlbstandings,
  nbaschedule,
  nbaresults,
  mlbodds,
  nbaodds,
  nflodds,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let myStore = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

class App extends React.Component {
  render() {
    return (
      <BreakpointProvider>
        <div className="App">
          <Provider store={myStore}>
            <Router>
              <NavBar />
              <Switch>
                <Route path="/news" component={NewsContainer} />
                <Route path="/mlb" component={MlbContainer} />
                <Route path="/mlbstandings" component={MLBStandingsContainer} />
                <Route path="/odds" component={OddsContainer} />
                <Route path="/nba" component={NbaContainer} />
                <Route path="/nfl" component={NflContainer} />
                <Route exact path="/" component={Home} />
              </Switch>
            </Router>
          </Provider>
        </div>
      </BreakpointProvider>
    );
  }
}

export default App;
