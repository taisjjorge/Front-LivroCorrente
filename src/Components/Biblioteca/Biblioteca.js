import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



import './biblioteca.css';


export default function Biblioteca (props){ 

    let teste = `${props.Campanha}?id=${props.id}`

    return (
      
          <Col md={4}>
            <Card className="card">
              <Card.Img variant="top" src={require(`./img/${props.imagem}`).default} />
              <Card.Body>
                <Card.Title>{props.nome}</Card.Title>
                <Card.Text>Rede: {props.nome_rede}</Card.Text>
                <Card.Text>{props.estado_biblioteca}, {props.cidade_biblioteca}</Card.Text>
              </Card.Body>
              <Card.Body>
               <Card.Link className="link-externo" href={props.link}>Perfil</Card.Link>
               <Link to={teste}><Card.Link>Campanhas</Card.Link></Link>
             </Card.Body>
            </Card>
          </Col>

          
    );
}


