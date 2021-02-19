import React, {useState} from 'react'
import { Redirect, Link } from 'react-router-dom'
import CampanhaBiblioteca from '../../Components/CampanhaBiblioteca'
import CampanhaInativa from '../../Components/CampanhaInativa'
import HeaderPagina from '../../Components/HeaderPagina'
import { Container, Row, Button } from 'react-bootstrap'

function Livros() {

    const [livros, setLivros] = useState([])

    useState( async () => {
        const answer = await fetch("http://localhost:3001/livros",{
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
                <Link to="/AddLivros"><Button class="btn btn-secondary mt-2">Adicionar Livros</Button></Link>
                </div>
            <hr />
            <h1 class="display-4">Campanhas Ativas</h1>
            <Row>
                {cardsAtivos}
            </Row>
            <hr />
            <h1 class="display-4">Livros Adicionados</h1>
            <Row>
                {cardsInativos}
            </Row>
        </Container>
        </>
    )
}
export default Livros