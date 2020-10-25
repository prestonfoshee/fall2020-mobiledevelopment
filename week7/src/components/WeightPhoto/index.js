import React, { Component } from 'react';
import '../../App.css';
import weights from '../../img/Lifting-Weights-Wrong-1.jpg';

class WeightPhoto extends Component {

    render() {
        return (
            <div className="weight-container">
                <img src={weights} className="weights" alt="weights" />
            </div>
        )
    }
}

export default WeightPhoto;