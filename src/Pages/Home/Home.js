import React from 'react';
import {useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import  Banner  from '../../Components/Banner';
import Campanha from '../../Components/Campanha';
import BtnCard from '../../Components/BtnCard';
import { Link } from 'react-router-dom';

import './home.css';


function Home() {

    const [produtos, setProdutos] = useState([]);

    useState(async () => {
        const answer = await fetch("http://localhost:3001/cards")
        const data = await answer.json()
        setProdutos(data);

    }, []);

    const cards = produtos.map(item => <Campanha capa={item.capa_pedido}
        titulo={item.titulo_pedido}
       numeroExemplar={item.numeroExemplar_pedido}
       genero={item.genero_pedido}
       Biblioteca={item.nome_biblioteca} />)

    return (
        <React.StrictMode>
            <Banner /> 
            <div className ="cards"> 
                <Link to="/Bibliotecas/Bibliotecas"><BtnCard title='Bibliotecas'/></Link>
                <Link to="/Voluntarios/Voluntarios"><BtnCard title='Voluntários'/></Link>
                <Link to="/Parceiros/Parceiros"><BtnCard title='Parceiros'/></Link>
                {/* <a href="#parceiros"><BtnCard title='Parceiros'/></a> */}
            </div>
            <div className="div-main">
                <Container >
                    <h1 className="titulo-principal">Como eu posso ajudar?</h1>
                    <h3 className="titulo-secundario">Doe um livro a uma biblioteca comunitária!</h3>
                    <Container className="div-campanhas">
                     {cards}
                    </Container>
                </Container>
            </div>
        </React.StrictMode>
        );
};

export default Home;
