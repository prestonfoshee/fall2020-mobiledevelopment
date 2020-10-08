import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reps from './components/Reps'
import Exercise from './components/Exercise'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Exercise />
        <Reps />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
