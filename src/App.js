import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Content from './Components/Content';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Content/>
      </div>
    );
  }
}

export default App;
