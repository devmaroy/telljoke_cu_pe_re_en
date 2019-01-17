import React from 'react';

export default class RemoveJoke extends React.Component {
    handleRemoveJoke = () => {
        const jokeToRemove = this.props.location.state.jokeText;
        this.props.handleRemoveJoke( jokeToRemove );
        this.props.history.push( '/' );
    };
    
    render() {
        return (
            <div>
                <h1>Removing Joke</h1>
                <p>{ this.props.location.state.jokeText }</p>
                <button onClick={ this.handleRemoveJoke }>Remove</button>
            </div>
        );
    }
}