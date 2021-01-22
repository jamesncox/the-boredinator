import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './stylesheets/App.css';
import './stylesheets/responsive.css';
import './stylesheets/categories.css'
import Title from './components/pageFormat/Title.js'
import Home from './components/pageFormat/Home'
import IndexPage from './components/pageFormat/IndexPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/index">
            <IndexPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;