import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container" id="mainContent">
        <div className="row">
          <input type="text" className="form-control" placeholder="Search an amazing planet to live..." /> 
        </div>
        <div className="row" id="secondary">
          
        </div>
      </div>
    );
  }
}

export default App;
