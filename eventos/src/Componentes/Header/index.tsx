import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

interface HeaderProps{
    title: string;
}

 const Header: FC<HeaderProps> = (props) => {
    return (
        <div>
            <header>
                <nav>
                    <div className="propsHeader">
                        <h3>{props.title}</h3>
                    </div>
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

export default Header;