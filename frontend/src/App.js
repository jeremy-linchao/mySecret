import React, { Component } from 'react';
import Nav from './components/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
        </div>
        <div className="content-wapper">
          <div className="nav">
            <Nav />
          </div>
          <div className="content">
            { this.props.children }
          </div>  
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}

export default App;
