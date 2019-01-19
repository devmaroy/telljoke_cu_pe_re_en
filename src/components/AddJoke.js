import React from 'react';
import { isMobile } from 'react-device-detect';

export default class Jokes extends React.Component {
    state = {
        focus: true,
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
        this.resetFocus();
    };

    handleOnEnterPress = ( e ) => {
        if ( e.keyCode == 13 && e.shiftKey == false ) { 
            e.preventDefault();
            this.handleAddJoke();
            this.resetFocus();
        }
    };

    render() {
        return (
            <div className="add-joke">
                { this.state.error && <p className="add-joke-error">{ this.state.error }</p> }
                <form className="form" onSubmit={ this.handleOnSubmit }>
                    <textarea 
                        className="form__textarea"
                        rows="4" 
                        ref="joke"
                        autoFocus={ !isMobile }
                        onKeyDown={ this.handleOnEnterPress }
                    >
                    </textarea>
                    <button className="button form__button">Add Joke</button>
                </form>
                <h1>Je toto mobil?: { isMobile.toString() }</h1>
            </div>
        );
    };
}