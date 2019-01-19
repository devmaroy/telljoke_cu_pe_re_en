import React from 'react';

export default class SimpleFlash extends React.Component {
    state = {
        hide: false
    };

    message = '';

    componentDidMount() {
        setTimeout(() => {
            this.setState( () => ( { hide: true } ) );
        }, 1500);
    };

    componentWillMount() {
        if ( this.props.location.state && this.props.location.state.message ) {
            this.message = this.props.location.state.message;

            this.props.history.replace({
                pathname: this.props.location.pathname,
                state: {}
            });
        }
    };

    render() {
        if ( ! this.message || this.state.hide ) {
            return null;
        }

        return (
            <div className="flash-message">{ this.message }</div>
        )
    };
};