import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../../App.css';

class Exercise extends Component {

    render() {
        return (
            <div className="exercise">
                <p>Exercise: Dumbbell Shoulder Press</p>
            </div>
        )
    }
}

export default Exercise;