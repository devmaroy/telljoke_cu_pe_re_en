import React from 'react';

export default class Jokes extends React.Component {
    state = {
        error: undefined
    };

    handleAddJoke = () => {
        const joke = this.refs.joke.value.trim();
        const error = this.props.handleAddJoke( joke );
        
        this.setState( () => ( { error } ) );

        if ( ! error ) {
            this.refs.joke.value = '';
        }
    };

    handleOnSubmit = ( e ) => {
        e.preventDefault();        
        this.handleAddJoke();
    };

    handleOnEnterPress = ( e ) => {
        if ( e.keyCode == 13 && e.shiftKey == false ) { 
            e.preventDefault();
            this.handleAddJoke();
        }
    };

    render() {
        return (
            <div>
                { this.state.error && <p>{ this.state.error }</p> }
                <form onSubmit={ this.handleOnSubmit }>
                    <textarea 
                        rows="4" 
                        ref="joke"
                        autoFocus
                        onKeyDown={ this.handleOnEnterPress }
                    >
                    </textarea>
                    <button>Add Joke</button>
                </form>
            </div>
        );
    };
}