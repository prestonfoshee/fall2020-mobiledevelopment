import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Reps extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
        return (
            <div>
                <p>Reps: {this.state.counter}</p>
                <button onClick={() => { this.setState({ counter: this.state.counter + 1 }); }}>Add a rep</button>
                <br></br>
                <button onClick={() => { this.setState({ counter: this.state.counter = 0 }); }}>Reset</button>
            </div>
        )
    }
}

export default Reps;