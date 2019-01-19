import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

export default class EditJoke extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;

        if ( ! this.props.getJokeById( id ) ) {
            this.props.history.push( '/not-found' );
        }
    }

    handleEditJoke = () => {
        const jokeToEdit = this.props.location.state.jokeText;
        const jokeToSet = this.refs.jokeToSet.value;
        this.props.handleEditJoke( jokeToEdit, jokeToSet );
        this.props.history.push( '/', { message: 'Joke was edited!' } );
    };

    handleOnSubmit = ( e ) => {
        e.preventDefault();
        this.handleEditJoke();
    };

    handleOnEnterPress = ( e ) => {
        if ( e.keyCode == 13 && e.shiftKey == false ) { 
            e.preventDefault();
            this.handleEditJoke();
        }
    };

    render() {
        return (
            <div className="manage">
                <div className="container">
                    <h1 className="manage__title">Editing Joke</h1>
                    <form className="form" onSubmit={ this.handleOnSubmit }>
                        <textarea 
                            className="form__textarea"
                            rows="4"
                            ref="jokeToSet"
                            autoFocus={ !isMobile }
                            defaultValue={ this.props.getJokeById( this.props.match.params.id ) }
                            onKeyDown={ this.handleOnEnterPress }
                        >
                        </textarea>
                        <div className="manage-controls">
                            <Link to="/">go back</Link>
                            <button className="button manage-controls__button">Edit Joke</button>
                        </div>
          
                    </form>
                </div>
            </div>
        );
    }
}