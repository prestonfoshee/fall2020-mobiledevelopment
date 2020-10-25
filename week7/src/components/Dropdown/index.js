import React from 'react';
import '../../App.css';

const Dropdown = () => {
    return (
        <div>
            <br></br><br></br>
            <select className="dropdown">
                <option value="0">Select workout:</option>
                <option value="1">Barbell bench press</option>
                <option value="2">Bicep curl</option>
                <option value="3">Lateral raise</option>
                <option value="4">Back squat</option>
                <option value="5">Leg extension</option>
            </select>
        </div>
    );
}

export default Dropdown;