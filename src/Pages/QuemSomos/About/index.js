import React, { Component } from 'react';
import { Section, Lista, Conteudo, Info, Squad, Sobrenos, Inf } from './Styled';
// import { Typography } from '@material-ui/core';

import Alan from './img/Alan.png';
import Atila from './img/Atila.png';
import Bruno from './img/Bruno.png';
import Renata from './img/Renata.png';
import Tais from './img/Tais.png';

export default class Membros extends Component {
    state = {
        membros: [
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
                id:3,
                nome:"Bruno Lima ",
                figure:Bruno
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
        ]};

        render(){
            const { membros } = this.state;

            return (
                <>
                <Section>
                   <Lista>
                       <Sobrenos>
                            <Inf>
                                <h1>Sobre nós</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </Inf>
                       </Sobrenos>
                       <Squad>
                        {membros.map(nomes =>
                            <Conteudo key={nomes.id}>
                                <img src={nomes.figure} alt='Imagem' />
                                <br/>
                                <Info>{nomes.nome}</Info>
                            </Conteudo>
                        )}
                        </Squad>
                   </Lista>
                </Section>
                </>
            )
        }
}



