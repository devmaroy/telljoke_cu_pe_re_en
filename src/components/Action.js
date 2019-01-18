import React from 'react';

const Action = ( props ) => (
    <div className="action">
        <button
            className="big-button"
            onClick={ props.handlePickJoke }
        >
            Tell me a joke!
        </button>
    </div>
);

export default Action;