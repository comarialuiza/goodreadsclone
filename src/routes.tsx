import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Books from './pages/Books';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Books }/>
                <Route path="/login" exact component={ Login }/>
            </Switch>
        </BrowserRouter>
    )
}