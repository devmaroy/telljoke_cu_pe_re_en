import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="page">
        <div className="container">  
            <h1 className="page__title">404!</h1>
            <h2 className="page__subtitle">Page not found 😱</h2>
            <p>The Page you are looking for doesn't exist or another error occured.</p>
            <p><Link to="/">Go home</Link> and try again!</p>
        </div>
    </div>
);

export default NotFoundPage;