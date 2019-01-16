import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import EditJoke from '../components/EditJoke';
import RemoveJoke from '../components/RemoveJoke';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ HomePage } exact={ true } />
                <Route path="/about" component={ AboutPage } />
                <Route path="/contact" component={ AboutPage } />
                <Route path="/edit/:id" component={ EditJoke } />
                <Route path="/remove/:id" component={ RemoveJoke } />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;