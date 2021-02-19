import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';

import './adicionarLivro.css';


export default function AdicionaLivro() {
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [numeroExemplar, setNumeroExemplar] = useState(2)
    const [genero, setGenero] = useState('')

    const [resp, setResp] = useState('')

    async function Adicao(e){
        e.preventDefault()
        const answer = await fetch("http://localhost:3001/adiciona/livros",{
            method: "POST",
            headers:{
              "Content-Type": "application/json",
              "Authorization": "Bearer "+ localStorage.getItem("token")
            },
            body: JSON.stringify({
              "autor": autor,
              "titulo":titulo,
              "numeroExemplar":numeroExemplar,
              "genero":genero
          })})
    
        const data = await answer.json()
        setResp(data.Mensagem)
    }

    if(resp == "Livro cadastrado"){
        return(<Redirect to="/Livros" />)
    } else if(resp == "Token Invalido"){
        return(<Redirect to="/Login-Biblioteca" />) 
    }


    return(
      <div class="container-Addlivro">

        <h1 class="display-4 mb-4">Adicionar um livro</h1>
        <Form onSubmit={Adicao}>
            <Form.Group>
              <Form.Label>Título:</Form.Label>
              <Form.Control type="text" name="titulo" onChange={e => setTitulo(e.target.value)} />
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Gênero:</Form.Label>
              <Form.Control type="text" name="genero" onChange={e => setGenero(e.target.value)}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Nº exemplares:</Form.Label>
              <Form.Control as="select" name="numeroExemplar" onChange={e => setNumeroExemplar(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Control>
            </Form.Group>

            <Form>

            <Form.Group>
              <Form.File id="capa_pedido" label="Capa Livro:" />
            </Form.Group>
          </Form>

            <Button className="btn-adicionar" variant="outline-primary" type="submit">Adicionar</Button>

          </Form>
      </div>
    )
}