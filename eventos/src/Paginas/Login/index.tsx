import React, { InputHTMLAttributes } from 'react';

import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';
import Input from '../../Componentes/Input';

import './style.css';

export default function Login() {
    return(
        <div>
            <Header title="Acesse todos os seus eventos" />
            <h1>Sign In Page.</h1>
            <Input label="" name=""/>
            <Footer />
        </div>
    );
}