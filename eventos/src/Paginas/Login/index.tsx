import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';
import Input from '../../Componentes/Input';
import Button from '../../Componentes/Button';

import photo2020 from '../../assets/2020.jpg'

import './style.css';

export default function Login() {

    let history = useHistory();

    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');

    function logar() {
        
        const login = {
            email: email,
            senha: senha
        }

        fetch('http://localhost:5000/api/conta/login', {
            method: 'POST',
            body: JSON.stringify(logar),
            headers:{
            'content-type': 'application/json'
            }
        }).
        then(response => response.json()).
        then( dados => {
            localStorage.setItem('token', dados.token)
            history.push('/');
        }).
        catch(erro => console.error(erro));
    }
    

    return(
        <div className="content-login">
            <Header title="Acesse todos os seus eventos" />
            
            <img src={photo2020} alt="Imagem feliz e com números iluminados do numeral 2020" className="img2020"/>            

            <div className="centro">
                <h1>Login</h1>
                <form onSubmit={event => {
                    event.preventDefault();
                    logar();
                    }}
                >
                    <Input name="email" label="E-mail" placeholder="seuEmail@email.com" onChange={ e => setEmail(e.target.value) } />
                    <Input name="senha" label="Senha" type="password" onChange={ e => setSenha(e.target.value) } />
                    <Button value="Enviar"/>
                </form>
            </div>
            <Footer />
        </div>
    );
}