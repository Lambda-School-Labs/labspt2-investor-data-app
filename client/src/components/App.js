import React, { Component } from 'react';
import Landing from '../components/Landing/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Billing />
      </div>
    );
  }
}

export default App;
