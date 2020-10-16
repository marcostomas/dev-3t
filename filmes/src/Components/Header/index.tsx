import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.png';

import './style.css';

interface HeaderProps {
    description: string;
    text?: string;
}

const Header: React.FC<HeaderProps> = (props) => {


    let history = useHistory();

    const logout = () => {
        localStorage.removeItem('token-filmes');
        history.push('/');
    }

    const menu = () => {
        const token = localStorage.getItem('token-filmes');
        if (token === undefined || token === null) {
            return (
                <ul className="menu">
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/login" className="link">Login</Link></li>
                    <li><Link to="/cadastro" className="link">Cadastro</Link></li>
                </ul>
            )
        } else {
            return (
                <ul className="menu">
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/perfil" className="link">Perfil</Link></li>
                    <li><Link to="/filmes" className="link">Filmes</Link></li>
                    <li><Link to="/generos" className="link">Generos</Link></li>
                    <li><Link to="" onClick={event => {
                        event.preventDefault();
                        logout();
                    }} >Logout</Link></li>
                </ul>
            )
        }
    }

    return (
        <div className="header">
            <nav>
                <Link to="/"><img src={logo} alt="logo da coletânea" /></Link>
                <div className="eter"></div>
                {menu()}
            </nav>
            
            <div className="header-props">
                <h3>{props.description}</h3>
                {props.children}
                {props.text && <p>{props.text}</p>}
            </div>
                
        </div>
    );
}

export default Header;