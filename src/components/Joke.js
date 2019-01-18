import React from 'react';
import { Link } from 'react-router-dom';

const Joke = ( props ) => (
    <div className="joke">
        <p className="joke__text">{ props.jokeText }</p>

        <div className="joke-controls">
            <Link
                className="button button--link joke-controls__button"
                to={{
                    pathname: `/edit/${ props.jokeIndex }`,
                    state: {
                        jokeText: props.jokeText
                    }
                }}
            >
                edit
            </Link>
            <Link
                className="button button--link joke-controls__button"
                to={{
                    pathname: `/remove/${ props.jokeIndex }`,
                    state: {
                        jokeText: props.jokeText
                    }
                }}
            >
                &times;    
            </Link>
        </div>
    </div>
);

export default Joke;

/*            "Today at the bank, an old lady asked me to help check her balance. So I pushed her over.",
            "I told my girlfriend she drew her eyebrows too high. She seemed surprised.",
            "My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away."*/