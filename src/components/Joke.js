import React from 'react';
import { Link } from 'react-router-dom';

const Joke = ( props ) => (
    <div>
        <p>{ props.jokeText }</p>
        <Link
            to={{
                pathname: `/edit/${ props.jokeIndex }`,
                state: {
                    jokeText: props.jokeText
                }
            }}
        >
            Edit
        </Link>
        <Link
            to={{
                pathname: `/remove/${ props.jokeIndex }`,
                state: {
                    jokeText: props.jokeText
                }
            }}
        >
            Remove    
        </Link>
    </div>
);

export default Joke;

/*            "Today at the bank, an old lady asked me to help check her balance. So I pushed her over.",
            "I told my girlfriend she drew her eyebrows too high. She seemed surprised.",
            "My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away."*/