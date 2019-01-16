import React from 'react';

const EditJoke = ( props ) => (
    <div>
        <h1>Editing Joke with id: { props.match.params.id }</h1>
    </div>
);

export default EditJoke;