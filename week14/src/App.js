import React, { useReducer } from 'react';
import { state, reducer } from './Components/ApplicationState';
import './App.css';
import ShowCount from './Components/ShowCount';
import ToggleMessage from './Components/ToggleMessage';
import DecreaseCount from './Components/DecreaseCount';

function App() {

  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => { dispatch({ "type": "increment" }) }}>Increment</button>
        <DecreaseCount dispatch={dispatch} />
        <ShowCount currentState={currentState} />
        <ToggleMessage dispatch={dispatch} />
      </header>
    </div>
  );
}

export default App;
