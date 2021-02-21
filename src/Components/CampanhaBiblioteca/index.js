import React, {useEffect} from 'react';
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

  useEffect(() => {
    if(document.querySelector("[name='titulo']") != null){
      document.querySelector("[name='titulo']").value = props.titulo
      document.querySelector("[name='numeroExemplar']").value = props.numeroExemplar
      document.querySelector("[name='genero']").value = props.genero
    }
  }, [smShow])
  

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
        body: JSON.stringify({"id":props.id})})

    const data = await answer.json()
    setResp(data.Mensagem)
  }

  async function Delete(){
    const answer = await fetch("http://localhost:3001/deletar",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer "+ localStorage.getItem("token")
        },
        body: JSON.stringify({"id":props.id})})

    const data = await answer.json()
    setResp(data.Mensagem)
  }

  if (resp === "Token Invalido"){
    return(<Redirect to="/Login-Biblioteca" />)
  }
  
  

  return(
  
    <div className="card-campanhaBib">
      <div className="img-campanha">
        <img src={require(`./img/${props.capa}`).default} className="livro-campanhaBib" alt="Capa Livro" />
      </div>
      <div className="info-campanha">
        <h4>{props.titulo}</h4>
        <p>Exemplares: {props.numeroExemplar}</p>
        <p>Gênero: {props.genero}</p>
        <p>{props.Biblioteca}</p>
        <div className="btn-campanha">
          <div>
            <Button onClick={() =>setSmShow(true)} variant="success" className="editar">Editar</Button>
            <Button onClick={Delete} variant="danger" className="remover">Remover</Button>
          </div>
          <Button onClick={Update} variant="secondary" className="parar-campanha">Parar Campanha</Button>
        </div>
        
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
              <Form.Control as="select" name="numeroExemplar" onChange={e => setNumeroExemplar(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Gênero:</Form.Label>
              <Form.Control type="text" name="genero" onChange={e => setGenero(e.target.value)}/>
            </Form.Group>

            <Button variant="outline-primary" type="submit" onClick={()=>setSmShow(false)}>Enviar</Button>

          </Form>
        </Modal.Body>
      </Modal>
    </div> 
);
};
