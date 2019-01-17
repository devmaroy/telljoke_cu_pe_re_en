import React from 'react';
import Action from './Action';
import AddJoke from './AddJoke';
import Jokes from './Jokes';

const HomePage = ( props ) => (
    <div>
        { props.jokes.length === 0 && <p>Plese add jokes to get started!</p> }
        <Action 
            handlePickJoke={ props.handlePickJoke }
        />
        <AddJoke 
            handleAddJoke={ props.handleAddJoke }
        />
        <Jokes 
            jokes={ props.jokes } 
            handleRemoveJokes={ props.handleRemoveJokes }
        />
    </div>
);

export default HomePage;