import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GiphySearch from './components/giphy-search';
import GiphyHistory from './components/giphy-history';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Giphy Search</h2>
          <GiphyHistory />
        </div>
        <GiphySearch />
      </div>
    );
  }
}

export default App;
