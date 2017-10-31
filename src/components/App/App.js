import React, { Component } from 'react';
import './App.css';
import ListUsers from '../ListUsers';
import UserDetail from '../UserDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
        {this.props.current_user
          ? <span>

              <UserDetail />
            </span>
          : <ListUsers />
        }
        </p>
      </div>
    );
  }
}

export default App;
