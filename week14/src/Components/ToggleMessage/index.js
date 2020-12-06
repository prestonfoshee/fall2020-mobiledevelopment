import React from 'react';

function ToggleMessage(props) {
    return (
        <div>
            <button onClick={() => { props.dispatch({ "type": "toggle" }) }}>Hide Count</button>
        </div>
    );
}

export default ToggleMessage;