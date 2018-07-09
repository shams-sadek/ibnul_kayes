import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import User from './components/User/'
import Training from './components/Training'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My App</h1>
        {/* <User/> */}

        <Training/>

      </div>
    );
  }
}

export default App;
