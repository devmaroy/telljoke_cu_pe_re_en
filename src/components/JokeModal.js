import React from 'react';
import Modal from 'react-modal';

const JokeModal = ( props ) => (
    <Modal
        isOpen={ !!props.selectedJoke }
        contentLabel="Selected Joke"
        onRequestClose={ props.handleClearSelectedJoke }
        closeTimeoutMS={ 200 }
        className="modal"
    >
        <h3 className="modal__title">Joke:</h3>
        { props.selectedJoke && <p className="modal__body">{ props.selectedJoke }</p> }
        <button 
            className="button button--link"
            onClick={ props.handleClearSelectedJoke }
        >
            Close
        </button>
    </Modal>
);

export default JokeModal;