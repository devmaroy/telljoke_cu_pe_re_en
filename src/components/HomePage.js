import React from 'react';
import Action from './Action';
import AddJoke from './AddJoke';
import Jokes from './Jokes';

const HomePage = ( props ) => (
    <div>
        <h1>Welcome</h1>
        <Action 
            handlePickJoke={ props.handlePickJoke }
        />
        <AddJoke 
            handleAddJoke={ props.handleAddJoke }
        />
        <Jokes 
            jokes={ props.jokes } 
        />
    </div>
);

export default HomePage;