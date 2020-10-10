import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Pages/Home';
import login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Perfil from './Pages/Perfil';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={login}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/perfil" component={Perfil}/>
        </BrowserRouter>
    );
}

export default Routes;