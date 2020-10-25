import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reps from './components/Reps'
import Exercise from './components/Exercise'
import Dropdown from './components/Dropdown';
import MiddleText from './components/MiddleText'
import WeightPhoto from './components/WeightPhoto';

function App() {
  return (
    <div className="App">
      <Exercise />
      <Reps />
      <Dropdown />
      <MiddleText />
      <WeightPhoto />
    </div>
  );
}

export default App;
