import React, {useState} from 'react'
import { Redirect, Link } from 'react-router-dom'
import CampanhaBiblioteca from '../../Components/CampanhaBiblioteca'
import CampanhaInativa from '../../Components/CampanhaInativa'
import HeaderPagina from '../../Components/HeaderPagina'
import { Container, Row, Button } from 'react-bootstrap'

import './livros.css';

function Livros() {

    const [livros, setLivros] = useState([])

    useState( async () => {
        const answer = await fetch("https://back-livro-corrente.herokuapp.com/livros",{
            method: "POST",
            headers:{"Content-Type":"application/json",
            "Authorization": "Bearer "+ localStorage.getItem("token")
            }
        })
    
    const data = await answer.json()
    if (data.Mensagem == "Token Invalido"){
        return(<Redirect to="/Login-Biblioteca"/>)
    }

    setLivros(data)
    
    },[])

    const cardsAtivos = livros.map((item) => {
        if(item.valido_pedido.data == 1 ){
            return(
            <CampanhaBiblioteca 
            id={item.id_pedido}
            capa={item.capa_pedido}
            titulo={item.titulo_pedido}
            numeroExemplar={item.numeroExemplar_pedido}
            genero={item.genero_pedido}
            Biblioteca={item.nome_biblioteca}
            valido={item.valido_pedido.data} 
            />)
        }
    })

    const cardsInativos = livros.map((item) => {
        if(item.valido_pedido.data == 0 ){
            return(     
            <CampanhaInativa 
            id={item.id_pedido}
            capa={item.capa_pedido}
            titulo={item.titulo_pedido}
            numeroExemplar={item.numeroExemplar_pedido}
            genero={item.genero_pedido}
            Biblioteca={item.nome_biblioteca} 
            valido={item.valido_pedido.data}
            />)
            }
        }
    )


    return(
        <>
        <HeaderPagina titleCategoria='Livros' />
            <Container>
                <div>
                    <h1 className="sectionTitle">Adicionar novas campanhas:</h1>
                    <Link to="/AddLivros"><Button variant="primary" className="btn-addLivro">Adicionar Livros</Button></Link>
                </div>
                <br/>
                <hr />
                <h1 className="sectionTitle">Campanhas ativas:</h1>
                    <Row className="row-cards">
                        {cardsAtivos}
                    </Row>
                <hr />
                <h1 class="sectionTitle">Livros adicionados:</h1>
                    <Row  className="row-cards">
                        {cardsInativos}
                    </Row>
                <br/>
                <hr />
            </Container>
        </>
    )
}
export default Livros