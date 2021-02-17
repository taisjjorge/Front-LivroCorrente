import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './biblioteca.css';


export default function Biblioteca (props){ 
  function IdBiblio(){
    localStorage.setItem("Biblio", props.id)
  }
  return (
      <Col md={4}>
        <Card className="card">
          <Card.Img variant="top" src={require(`./img/${props.imagem}`).default} />
          <Card.Body>
            <Card.Text className="titulo">{props.nome}</Card.Text>
            <Card.Text>Rede: {props.nome_rede}</Card.Text>
            <Card.Text>{props.estado_biblioteca}, {props.cidade_biblioteca}</Card.Text>
          </Card.Body>
          <Card.Body>
           <Card.Link className="link-externo" href={props.link}>Perfil</Card.Link>
           <Link to='/Campanhas' onClick={IdBiblio}><Card.Link>Campanhas</Card.Link></Link>
          </Card.Body>
        </Card>
      </Col>  
  );
}


