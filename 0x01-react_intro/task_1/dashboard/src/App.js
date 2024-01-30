import React from 'react';
import holberton from './holberton.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="app">
      <div className="App-header">
        <img src={holberton} alt="" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
        <p>
          Copyright
          {' '}
          {getFullYear()}
          {' '}
          -
          {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
