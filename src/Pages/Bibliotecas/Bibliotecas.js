import React from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HeaderPagina from '../../Components/HeaderPagina';
import Biblioteca from '../../Components/Biblioteca/Biblioteca';



import './bibliotecas.css';

export default function Bibliotecas() {

  const [biblioteca, setBiblioteca] = useState([]);
  const [busca, setBusca] = useState('')

  React.useState(async () => {
      const answer = await fetch("http://localhost:3001/bibliotecas")
      const data = await answer.json()
      setBiblioteca(data);

  }, []);
  
  var bibliotecas = biblioteca.map(item =>{
      if (item.nome_biblioteca.toLowerCase().indexOf(busca.trim().toLowerCase()) >= 0){
        return(<Biblioteca id={item.id_biblioteca}
        nome={item.nome_biblioteca}
        nome_rede={item.nome_rede}
        estado_biblioteca={item.estado_biblioteca}
        cidade_biblioteca={item.cidade_biblioteca}
        link={item.linkRNBC_biblioteca}
        imagem={item.imagem_biblioteca}
        />)
      } else if (busca == ' '){
        return(<Biblioteca id={item.id_biblioteca}
          nome={item.nome_biblioteca}
          nome_rede={item.nome_rede}
          estado_biblioteca={item.estado_biblioteca}
          cidade_biblioteca={item.cidade_biblioteca}
          link={item.linkRNBC_biblioteca}
          imagem={item.imagem_biblioteca}
          />)
      } 
  })


    return (
      <>
        <HeaderPagina titleCategoria='Bibliotecas cadastradas' />
        
        <Container fluid className="div-main-bibliotecas">
          <input class="float-right mt-3" placeholder="" onChange={event => setBusca(event.target.value)}/>
          <Container>
          {/* Utilizando função map para puxar os dados do array bibliotecas a partir das props passadas no componente Biblioteca */}
          <Row>
          {bibliotecas}
          </Row>
          </Container>
        </Container>
      
      </>
       
        );
};

