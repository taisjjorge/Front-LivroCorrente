import React from 'react';
import { Redirect } from 'react-router-dom'
import { useState } from 'react';
import { Modal, Button, Form} from 'react-bootstrap';
import './campanhaBiblioteca.css';


export default function CampanhaBiblioteca(props){

  const [titulo, setTitulo] = useState(props.titulo)
  const [numeroExemplar, setNumeroExemplar] = useState(props.numeroExemplar)
  const [genero, setGenero] = useState(props.genero)

  const [smShow, setSmShow] = useState(false);
  const [resp, setResp] = useState('')


  async function Edicao(e){
    e.preventDefault()
    const answer = await fetch("http://localhost:3001/atualizar/card",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer "+ localStorage.getItem("token")
        },
        body: JSON.stringify({
          "id": props.id,
          "titulo":titulo,
          "numeroExemplar":numeroExemplar,
          "genero":genero
      })})

    const data = await answer.json()
    setResp(data.Mensagem)
  }

  async function Update(){
    const answer = await fetch("http://localhost:3001/remover/card",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer "+ localStorage.getItem("token")
        },
        body: JSON.stringify({"titulo":props.titulo})})

    const data = await answer.json()
    setResp(data.Mensagem)
  }


  if(resp === "Foi"){
    return(<Redirect to="/Campanhas" />)
  } else if(resp === "Token Invalido"){
    return(<Redirect to="/Login-Biblioteca" />)
  }

  return(
  
    <div className="card-campanha">
      <div className="img-campanha">
        <img src={require(`./img/${props.capa}`).default} className="livro-campanha" alt="Capa Livro" />
      </div>
      <div className="info-campanha">
        <h4>{props.titulo}</h4>
        <p>Exemplares: {props.numeroExemplar}</p>
        <p>Gênero: {props.genero}</p>
        <p>{props.Biblioteca}</p>
        <Button onClick={() =>setSmShow(true)} variant="success" className="editar">Editar</Button>
        <Button onClick={Update} variant="danger" className="remover">Remover</Button>
      </div>

      {/* React-Bootstrap */}
      <Modal
         size="sm"
         show={smShow}
         onHide={() => setSmShow(false)}
         aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           Editar Campanha
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={Edicao}>
            <Form.Group>
              <Form.Label>Título:</Form.Label>
              <Form.Control type="text" name="titulo" onChange={e => setTitulo(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Nº exemplares:</Form.Label>
              <Form.Control as="select" name="numeroExemplar" text="Teste" onChange={e => setNumeroExemplar(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Gênero:</Form.Label>
              <Form.Control type="text" name="genero" onChange={e => setGenero(e.target.value)}/>
            </Form.Group>

            <Button variant="outline-primary" type="submit">Enviar</Button>

          </Form>
        </Modal.Body>
      </Modal>
    </div> 
);
};
