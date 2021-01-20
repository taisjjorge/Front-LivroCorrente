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
                                <p>Somos um coletivo de desenvolvedores FullStack, concluintes do programa <a href="https://www.recodepro.org.br/">Recode PRO</a>.
                                Nosso interesse é promover uma solução de alto impacto aos desafios decorrentes do baixo acesso à literatura nas comunidades. 
                                Ler expande nossas referências e nos estimula a imaginar. 
                                Se você também acredita que a leitura é indispensável na construção do saber dos indivíduos e, consequentemente,
                                 é um direito fundamental, apoie o nosso projeto como voluntário ou parceiro e nos ajude a continuar.
                                     </p>
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



