import React from 'react';
import { Figure, Container } from 'react-bootstrap';
import HeaderPagina from '../../Components/HeaderPagina';

import './parceiros.css';


export default function Parceiros () {

   
    return (
        <>
            <HeaderPagina titleCategoria='Parceiros'/>
            <Container className="pagina-construcao">
                <h1 class="display-4">Ops, página em construção!</h1>
                <Figure >
                    <Figure.Image className="img-construcao" alt="Imagem site em construção" src={require(`./img/build.png`).default} />
                    <Figure.Caption className="text-credito">
                        Illustration by <a href="undefined">Icons 8</a> from <a href="https://icons8.com/">Icons8</a>
                    </Figure.Caption>
                </Figure>
            </Container>
        </>    
    )
}