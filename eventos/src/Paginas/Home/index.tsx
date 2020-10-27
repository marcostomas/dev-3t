import React from 'react';

import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';

import banner from '../../assets/banner.jpg';

import './style.css';

export default function Home(){
    return(
        <div>
            <Header title="A sua plataforma de eventos"/>
            <div className="content">
                <img src={banner} className="banner" alt="Festa"/>
                
                <div className="text-area">
                    <h1>Eventos</h1>
                    
                    <div className="description">
                        <h3>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</h3>
                        
                        <p>
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit. 
                        </p>
                        
                        <br/>

                        <h3>Eventos</h3>
                        <p>
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo 
                            consequat. 
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}