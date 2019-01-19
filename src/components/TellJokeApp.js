import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import EditJoke from './EditJoke';
import RemoveJoke from './RemoveJoke';
import JokeModal from './JokeModal';
import NotFoundPage from './NotFoundPage';

export default class TellJokeApp extends React.Component {
    state = {
        loading: true,
        jokes: [],
        selectedJoke: undefined
    };

    componentDidMount() {
        this.setState( { loading: false } );

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

        this.setState( () => ( { selectedJoke: joke } ) );
    };

    handleClearSelectedJoke = () => {
        this.setState( () => ( { selectedJoke: undefined } ) );
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

                return {
                    jokes
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

    handleRemoveJokes = () => {
       this.setState( () => ( { jokes: [] } ) ); 
    };

    getJokeById = ( id ) => {
        return this.state.jokes[ id - 1 ];
    };

    render() {
        const loading = this.state.loading;

        if ( loading ) {
            return null;
        }

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
                                handleRemoveJokes={ this.handleRemoveJokes }
                                { ...props }
                            />}
                        />
                        <Route 
                            path="/about" 
                            component={ AboutPage }
                            />
                        />
                        <Route 
                            path="/contact" 
                            component={ ContactPage }
                            />
                        />
                        <Route 
                            path="/edit/:id" 
                            component={( props ) => <EditJoke
                                handleEditJoke={ this.handleEditJoke }
                                getJokeById={ this.getJokeById }
                                { ...props }
                            />}
                        />
                        <Route 
                            path="/remove/:id" 
                            component={( props ) => <RemoveJoke
                                handleRemoveJoke={ this.handleRemoveJoke }
                                getJokeById={ this.getJokeById }
                                { ...props }
                            />}
                        />
                        <Route 
                            component={ NotFoundPage } 
                        />
                    </Switch>
                    <Footer />
                    <JokeModal
                        selectedJoke={ this.state.selectedJoke }
                        handleClearSelectedJoke={ this.handleClearSelectedJoke }
                    />
                </div>
            </BrowserRouter>
        );
    };
};