import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./stylesheets/App.css";
import "./stylesheets/responsive.css";
import "./stylesheets/categories.css";
import "./stylesheets/toggle.css";
import Title from "./components/pageFormat/Title.js";
import Home from "./components/pageFormat/Home";
import IndexPage from "./components/pageFormat/IndexPage";
import { ActivityPage } from "./components/pageFormat/ActivityPage";
import Footer from "./components/pageFormat/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/activities">
            <IndexPage />
          </Route>
          <Route
            exact
            path="/activities/:activityId"
            component={ActivityPage}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
