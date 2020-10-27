import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Header(){
    return (
        <div>
            <header>
                <nav>
                    <p className="propsHeader"> A sua Plataforma de Eventos </p>
                    <ul className="menu">
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/login">Login</Link></li>
                        <li><Link className="link" to="/dashboard">Eventos</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}