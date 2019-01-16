import React from 'react';

const RemoveJoke = ( props ) => (
    <div>
        <h1>Removing Joke with id: { props.match.params.id }</h1>
    </div>
);

export default RemoveJoke;