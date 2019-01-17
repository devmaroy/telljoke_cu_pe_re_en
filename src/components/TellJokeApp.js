import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import EditJoke from './EditJoke';
import RemoveJoke from './RemoveJoke';

export default class TellJokeApp extends React.Component {
    state = {
        jokes: []
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem( 'jokes' );
            const jokes = JSON.parse( json );

            if ( jokes ) {
                this.setState( () => ( { jokes } ) );
            }
        } catch ( e ) {
            // Do nothing
        }
    };

    componentDidUpdate( prevProps, prevState ) {
        const oldJokes = JSON.stringify( prevState.jokes );
        const newJokes = JSON.stringify( this.state.jokes );

        if ( oldJokes !== newJokes ) {
            const json = newJokes;
            localStorage.setItem( 'jokes', json );
        }
    };

    handlePickJoke = () => {
        const randomNum = Math.floor( Math.random() * this.state.jokes.length );
        const joke = this.state.jokes[ randomNum ];

        if ( joke ) {
            alert( joke );
        }
    };

    handleAddJoke = ( joke ) => {
        if ( ! joke ) {
            return 'Please enter valid joke';
        } else if ( this.state.jokes.indexOf( joke ) > -1 ) {
            return 'Joke already exist';
        }

        this.setState( ( prevState ) => ( { jokes: prevState.jokes.concat( joke ) } ) );
    };

    handleEditJoke = ( jokeToEdit, jokeToSet ) => {
        const index = this.state.jokes.indexOf( jokeToEdit );

        if ( index !== -1 ) {
            this.setState( ( prevState ) => {
                const jokes = [ ...prevState.jokes ];
                jokes[ index ] = jokeToSet; 

                console.log(jokeToEdit);
                
                return {
                    jokes: jokes
                };
            });
        }
    };

    handleRemoveJoke = ( jokeToRemove ) => {
        this.setState( ( prevState ) => {
            return {
                jokes: prevState.jokes.filter( ( joke ) => jokeToRemove !== joke )
            };
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact={ true }
                            component={( props ) => <HomePage
                                jokes={ this.state.jokes }
                                handlePickJoke={ this.handlePickJoke }
                                handleAddJoke={ this.handleAddJoke }
                                { ...props }
                            />}
                        />
                        <Route 
                            path="/edit/:id" 
                            component={( props ) => <EditJoke
                                handleEditJoke={ this.handleEditJoke }
                                { ...props }
                            />}
                        />
                        <Route 
                            path="/remove/:id" 
                            component={( props ) => <RemoveJoke
                                handleRemoveJoke={ this.handleRemoveJoke }
                                { ...props }
                            />}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    };
};