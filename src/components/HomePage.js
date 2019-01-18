import React from 'react';
import Action from './Action';
import AddJoke from './AddJoke';
import Jokes from './Jokes';

const HomePage = ( props ) => (
    <div className="home">
        <div className="container">
            { props.jokes.length === 0 && <p className="home__message">Please add jokes to get started!</p> }
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
    </div>
);

export default HomePage;