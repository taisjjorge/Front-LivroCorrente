import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import HeaderCampanha from '../../Components/HeaderCampanha';
import './campanhas.css';
import Campanha from '../../Components/Campanha';

export default function Campanhas () {

    const NumB = localStorage.getItem("Biblio")

    const [biblioteca, setBiblioteca] = useState([])
    const [livros, setLivros] = useState([]);

    useState( async () => {
        const envio = await fetch("http://localhost:3001/biblioteca",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({"id":NumB})
        })
    
        const espera = await envio.json()
        setBiblioteca(espera[0].nome_biblioteca)
    
    },[])


    useState( async () => {
    const answer = await fetch("http://localhost:3001/inativos",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({"id":NumB})
    })

    const data = await answer.json()
    setLivros(data)

    },[])

    if (livros.length==0){
        cards = <h1>No momento esta biblioteca não possui campanhas abertas!</h1>
    } else {
    var cards = livros.map((item) => 
    <Campanha
        id={item.id_pedido}
        capa={item.capa_pedido}
        titulo={item.titulo_pedido}
        numeroExemplar={item.numeroExemplar_pedido}
        genero={item.genero_pedido}
        Biblioteca={item.nome_biblioteca} 
        />)
    }

   
    return (
        
        <div className="div-main-campanhas">
            <HeaderCampanha nomeBiblioteca={biblioteca}/>

            <h1 className="titulo-principal">Confira todas as campanhas abertas por esta biblioteca:</h1>
            <h3 className="titulo-secundario">Contribua com uma biblioteca comunitária!</h3>

            <Container className="div-campanhas">
               {cards}
            </Container>
        </div>
        
    )
}
