import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SearchPage from "./search-page";
import GraphPage from "./graph-page";


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SearchPage} />
          <Route path="/result" component={GraphPage} />
        </div>
      </Router>
    );
  }
}

export default App;
