import React from 'react';
import Action from './Action';
import AddJoke from './AddJoke';
import Jokes from './Jokes';
import Footer from './Footer';

export default class HomePage extends React.Component {
    state = {
        jokes: [ 
                "Today at the bank, an old lady asked me to help check her balance. So I pushed her over.",
                "I told my girlfriend she drew her eyebrows too high. She seemed surprised.",
                "My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away."
        ]
    };

    render() {
        return (
            <div>
                <Action />
                <AddJoke />
                <Jokes jokes={ this.state.jokes } />
                <Footer />
            </div>
        )
    };
}