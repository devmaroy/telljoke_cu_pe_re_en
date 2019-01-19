import React from 'react';
import { Link } from 'react-router-dom';

export default class RemoveJoke extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;

        if ( ! this.props.getJokeById( id ) ) {
            this.props.history.push( '/not-found' );
        }
    }

    handleRemoveJoke = () => {
        const jokeToRemove = this.props.location.state.jokeText;
        this.props.handleRemoveJoke( jokeToRemove );
        this.props.history.push( '/', { message: 'Joke was removed!' } );
    };
    
    render() {
        return (
            <div className="manage">
                <div className="container">
                    <h1 className="manage__title">Removing Joke</h1>
                    <blockquote className="manage-preview">
                        <p className="manage-preview__text">{ this.props.getJokeById( this.props.match.params.id ) }</p>
                    </blockquote>
                    <div className="manage-controls">
                        <Link to="/">Go back</Link>
                        <button className="button manage-controls__button" onClick={ this.handleRemoveJoke }>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}