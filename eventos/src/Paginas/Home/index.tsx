import React from 'react';

import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';

import './style.css';

export default function Home(){
    return(
        <div>
            <Header />
            <div className="content">
                <h1>Home Page.</h1>
            </div>
            <Footer />
        </div>
    );
}