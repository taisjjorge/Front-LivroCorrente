import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



import './biblioteca.css';


export default function Biblioteca (props){ 



    return (
      
          <Col md={4}>
            <Card className="card">
              <Card.Img variant="top" src={'https://rnbc.org.br/wp-content/uploads/2020/03/Casa-Azul-768x434.jpeg'} />
              <Card.Body>
                <Card.Title>{props.nome_biblioteca}</Card.Title>
                <Card.Text>Rede: {props.nome_rede}</Card.Text>
                <Card.Text>{props.estado_biblioteca}, {props.cidade_biblioteca}</Card.Text>
              </Card.Body>
              <Card.Body>
               <Card.Link className="link-externo" href={props.linkRNBC_biblioteca}>Perfil</Card.Link>
               <Link to={props.linkCampanhas_biblioteca}><Card.Link>Campanhas</Card.Link></Link>
             </Card.Body>
            </Card>
          </Col>

          
    );
}


