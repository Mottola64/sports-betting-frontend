import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import UpcomingGamesContainer from "./containers/UpcomingGamesContainer";
import NewsContainer from "./containers/NewsContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import upcoming from "./reducers/upcoming";
import sports from "./reducers/sports";
import sportsnews from "./reducers/sportsnews";
import Login from "./components/registrations/Login";
import Signup from "./components/registrations/Signup";
import "./App.css";

const reducer = combineReducers({
  upcoming,
  sports,
  sportsnews,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let myStore = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
    };
  }
  componentDidMount() {
    this.loginStatus();
  }
  loginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.handleLogin(response);
        } else {
          this.handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  };

  render() {
    return (
      <div className="App">
        <Provider store={myStore}>
          <Router>
            <NavBar />
            <Switch>
              <Route path="/upcominggames" component={UpcomingGamesContainer} />
              <Route path="/news" component={NewsContainer} />
              <Route
                exact
                path="/"
                render={(props) => (
                  <Home {...props} loggedInStatus={this.state.isLoggedIn} />
                )}
              />
              <Route
                exact
                path="/login"
                render={(props) => (
                  <Login
                    {...props}
                    handleLogin={this.handleLogin}
                    loggedInStatus={this.state.isLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/signup"
                render={(props) => (
                  <Signup
                    {...props}
                    handleLogin={this.handleLogin}
                    loggedInStatus={this.state.isLoggedIn}
                  />
                )}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
