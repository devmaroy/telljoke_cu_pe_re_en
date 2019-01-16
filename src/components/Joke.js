import React from 'react';
import { Link } from 'react-router-dom';

const Joke = ( props ) => (
    <div>
        <p>{ props.jokeText }</p>
        <Link to={ `/edit/${ props.jokeIndex }` }>Edit</Link>
        <Link to={ `/remove/${ props.jokeIndex }` }>Remove</Link>
    </div>
);

export default Joke;