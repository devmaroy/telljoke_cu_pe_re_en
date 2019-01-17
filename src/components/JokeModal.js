import React from 'react';
import Modal from 'react-modal';

const JokeModal = ( props ) => (
    <Modal
        isOpen={ !!props.selectedJoke }
        contentLabel="Selected Joke"
        onRequestClose={ props.handleClearSelectedJoke }
    >
        <h3>Joke:</h3>
        { props.selectedJoke && <p>{ props.selectedJoke }</p> }
        <button onClick={ props.handleClearSelectedJoke }>Close</button>
    </Modal>
);

export default JokeModal;