import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pattern1 from './pattern1.js';
import Pattern2 from './pattern2.js';
import Armstrong from './armstrong.js';
import Calculator from './calculator.js';
import App2 from './nev1.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Pattern1 />
        <Pattern2 />
        <Armstrong />
        <App2 />
        <Calculator />
      </div>
    );
  }
}

export default App;
