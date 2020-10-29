import React, { useState, useEffect } from 'react';

import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';

import './style.css'


/*
    useEffect → Como terá um efeito colateral, usaremos o useEffect
*/

export default function Dashboard(){

    const [Filme, setFilme] = useState();
    
    //Utilizamos um array pois retornaremos vários filmes, de uma vez só
    const [Filmes, setFilmes] = useState([]);
    const [idFilme, setIdFilmes] = useState(0);

    const [genero, setGenero] =  useState('');
    const [generos, setGeneros] =  useState([]);


    /* 
        • A função anônima é a responsável por montar a lista;
        • O useEffect ficará se atualizando até acabar a lista, ou seja, quando o tempo de vida dele acabar;
        • O useEffect é assíncrono;
        • O segundo argumento do useEffect ([]) é
    */

    // useEffect(() => {
    //     listarFilmes();
    //     listarGenero();
    // }, [])

    return(
        <div>
            <Header title="Registre seus Eventos"/>
            <h1>Dashboard Page.</h1>
            <Footer />
        </div>
    );
}