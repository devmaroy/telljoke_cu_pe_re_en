import React from 'react';

const Action = ( props ) => (
    <div>
        <button
            onClick={ props.handlePickJoke }
        >
            Tell me joke! (random)
        </button>
    </div>
);

export default Action;