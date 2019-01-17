import React from 'react';
import Joke from './Joke';

const Jokes = ( props ) => (
    <div>
        <button onClick={ props.handleRemoveJokes }>Remove All</button>
        {
            props.jokes.map( ( joke, index ) => (
                <Joke 
                    key={ joke }
                    jokeText={ joke } 
                    jokeIndex={ index + 1 }
                />
            ))
        }
    </div>
);

export default Jokes;