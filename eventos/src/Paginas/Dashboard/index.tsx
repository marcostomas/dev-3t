import React from 'react';

import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';

import './style.css'

export default function Dashboard(){
    return(
        <div>
            <Header title="Registre seus Eventos"/>
            <h1>Dashboard Page.</h1>
            <Footer />
        </div>
    );
}