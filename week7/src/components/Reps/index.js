import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../../App.css';

class Reps extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
        return (
            <div className="counterButtons">
                <p>Reps: {this.state.counter}</p>
                <button className="buttons" onClick={() => { this.setState({ counter: this.state.counter + 1 }); }}>Add a rep</button>
                <br></br><br></br>
                <button className="buttons" onClick={() => { this.setState({ counter: this.state.counter = 0 }); }}>Reset</button>
            </div>
        )
    }
}

export default Reps;