import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import HeaderCampanha from '../../Components/HeaderCampanha';
import './campanhas.css';
import Campanha from '../../Components/Campanha';


export default function Campanhas () {

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
        
        <div className="div-main-campanhas">
            <HeaderCampanha nomeBiblioteca="Biblioteca X"/>

            <h1 className="titulo-principal">Confira todas as campanhas abertas por esta biblioteca:</h1>
            <h3 className="titulo-secundario">Contribua com uma biblioteca comunitária!</h3>

            <Container className="div-campanhas">
               {cards}
            </Container>
        </div>
        
    )
}
