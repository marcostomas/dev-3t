import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

export default function Header(){
    return(
        <div className="header">
            <nav>
                <div className="logo">
                    <Link to="/"/>
                    <img src={logo} alt="Logomarca"/>
                </div>
            </nav>
        </div>
    );
}