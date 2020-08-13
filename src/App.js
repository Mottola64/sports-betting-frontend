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
import nbaschedule from './reducers/nbaschedule'
import "./App.css";
import DailyScheduleContainer from "./containers/DailyScheduleContainer";
import BettingCalculator from "./components/BettingCalculator";
import OddsContainer from "./containers/OddsContainer";
import MLBStandingsContainer from './containers/MLBStandingsContainer'
import NbaScheduleContainer from "./containers/NbaScheduleContainer";

const reducer = combineReducers({
  sports,
  sportsnews,
  dailyschedule,
  mlbstandings,
  nbaschedule,
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
              <Route path="/news" component={NewsContainer} />
              <Route path="/dailyschedule" component={DailyScheduleContainer} />
              <Route path="/oddsconverter" component={BettingCalculator} />
              <Route path="/mlbstandings" component={MLBStandingsContainer} />
              <Route path="/odds" component={OddsContainer} />
              <Route path='/nbaschedule' component={NbaScheduleContainer} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
