import React from 'react';
import {  useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import { NativeSelect, TextField } from '@material-ui/core';
import './campanha.css';


export default function Campanha(props){


  const [lgShow, setLgShow] = useState(false);

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
              <Button onClick={() => setLgShow(true)}>Doar</Button>
            </div>

            {/* React-Bootstrap */}
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Obaa! Ficamos felizes pelo seu interesse em ajudar :D
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Dá uma olhada nas formas de doação:</h4>
                <br/>
                <ul>
                  <li><h5>Envio direto:</h5></li>
                  <p>É possível o envio direto para a biblioteca pelos Correios. <br/>
                   Basta acessar a página <a href="../../Bibliotecas">Bibliotecas</a> e conferir as informações cadastrais de endereço no perfil da biblioteca correspondente</p>
                  <br/>
                  <li><h5>Encontre um voluntário:</h5></li>
                  <p>Selecione o bairro mais próximo para deixar sua doação com um de nossos voluntários</p>
                  <NativeSelect id="select">
                        <option value="coleta"></option>
                        <option value="coleta">Madureira</option>
                        <option value="coleta">Bonsucesso</option>
                        <option value="coleta">Centro</option>
                        <option value="coleta">Pça XV</option>
                        <option value="coleta">Glória</option>
                        <option value="coleta">Lgo do Machado</option>
                        <option value="coleta">Botafogo</option>
                        <option value="coleta">Jacarepaguá</option>
                        <option value="coleta">Ilha do Governador</option>
                    </NativeSelect><br/><br/>
                    
                    <TextField 
                            id="celular"
                            name="celular"
                            label="Celular"
                            type="text"
                            variant="standard"                
                        /> <br/><br/>

                    <Button variant="outline-primary" type="submit">Enviar</Button>
                  <br/><br/>
                  
                  <li><h5>Comprar livro em sites parceiros:</h5></li>
                  <p>Na compra de um livro selecionado com um de nossos parceiros, outro exemplar é enviado diretamente 
                    para uma biblioteca. Confira a listagem de livros na página <a href="#">Parceiros</a> e ajude!</p> 
                </ul>
              </Modal.Body>
            </Modal>
          </div> 
    );
};
