import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import SearchBar from "./search-bar";
import './App.css';


class SearchPage extends Component {

  render() {
    return (
        <div>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Paper Flow
            </Typography>
            </Toolbar>
          </AppBar>
          <SearchBar />
        </div>
    );
  }
}

export default SearchPage;
