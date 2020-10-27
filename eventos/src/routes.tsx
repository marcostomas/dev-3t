import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Paginas/Home';
import Login from './Paginas/Login';
import Dashboard from './Paginas/Dashboard';

export default function Routes(){
    return(
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard"component={Dashboard} />
        </Router>
    );
}