import React from 'react';

export default class EditJoke extends React.Component {
    handleEditJoke = () => {
        const jokeToEdit = this.props.location.state.jokeText;
        const jokeToSet = this.refs.jokeToSet.value;
         
        this.props.handleEditJoke( jokeToEdit, jokeToSet );
        this.props.history.push( '/' );
    };

    handleOnSubmit = ( e ) => {
        e.preventDefault();
        this.handleEditJoke();
    };

    render() {
        return (
            <div>
                <h1>Removing Joke</h1>
                <form onSubmit={ this.handleOnSubmit }>
                    <textarea 
                        rows="6"
                        ref="jokeToSet"
                        defaultValue={ this.props.location.state.jokeText }
                    >
                    </textarea>
                    <button>Update Joke</button>
                </form>
            </div>
        );
    }
}