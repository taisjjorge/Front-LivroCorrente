import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import HeaderCampanha from '../../Components/HeaderCampanha';
import './campanhas.css';
import Campanha from '../../Components/Campanha';


export default function Campanhas () {


    const [produtos, setProdutos] = useState([]);
    let cards = []
    let url = window.location.href
    let id = url.split("=")[1]

    function Func1(){
        useState( async () => {
        const answer = await fetch("http://localhost:3001/inativos",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({"id":id})})

        const data = await answer.json()
        setProdutos(data)

        },[])
        console.log(produtos.length)
        if (produtos.length==0){
            cards = <h1>Essa Biblioteca não realizou pedidos em nosso site :C </h1>
        } else {
            cards = produtos.map((item) => <Campanha capa={item.capa_pedido}
                titulo={item.titulo_pedido}
                numeroExemplar={item.numeroExemplar_pedido}
                genero={item.genero_pedido}
                Biblioteca={item.nome_biblioteca} />)
        }
    }

    function Func2() {
        useState(async () => {
            const answer = await fetch("http://localhost:3001/cards")
            const data = await answer.json()
            setProdutos(data);
    
        }, [])
        cards = produtos.map(item => <Campanha capa={item.capa_pedido}
            titulo={item.titulo_pedido}
           numeroExemplar={item.numeroExemplar_pedido}
           genero={item.genero_pedido}
           Biblioteca={item.nome_biblioteca} />)
    }

    if (id != null || id != undefined){ 
        Func1()
    } else {
        Func2()
    }   
   
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
