import React, { Component } from 'react';
import './App.css';
import UserChoose from './UserChoose';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          <UserChoose />
        </p>
      </div>
    );
  }
}

export default App;
