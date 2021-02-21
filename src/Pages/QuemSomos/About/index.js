import React from 'react';

import { Container } from 'react-bootstrap';

import './about.css';

import Alan from './img/Alan.png';
import Atila from './img/Atila.png';
import Renata from './img/Renata.png';
import Tais from './img/Tais.png';

const Membros = [
    {
        id: 1,
        nome: "Alan Santana ",
        figure: Alan
    },
    {
        id:2,
        nome: "Átila Aguiar ",
        figure:Atila
    },

    {
        id:4,
        nome:"Renata Lima ",
        figure:Renata
    },
    {
        id:5,
        nome:"Taís Araújo ",
        figure:Tais
    }
]

export default function SobreNos(){


    return(
        <Container fluid className="containerSobreNos">
            <div className="textSobreNos">
                <h1 className="titleSobreNos">Sobre nós</h1>
                <p className="infoSobreNos">Somos um coletivo de desenvolvedores FullStack, concluintes do programa Recode PRO.
                Nosso interesse é promover uma solução de alto impacto aos desafios decorrentes do baixo acesso à literatura nas comunidades. 
                Ler expande nossas referências e nos estimula a imaginar. 
                Se você também acredita que a leitura é indispensável na construção do saber dos indivíduos e, consequentemente,
                é um direito fundamental, apoie o nosso projeto como voluntário ou parceiro e nos ajude a continuar.
                </p>
            </div>
            <div className="imgMembros">
                {Membros.map(nomes =>(
                        <div className="infoMembro">
                            <img className="imgMembro" src={nomes.figure} alt='Imagem' />
                            <br/>
                            <p className="nomeMembro">{nomes.nome}</p>
                        </div>    
                ))}
            </div>
        </Container>
    )
}