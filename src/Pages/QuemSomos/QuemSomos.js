import React from 'react';
import { Figure } from 'react-bootstrap';
import HeaderPagina from '../../Components/HeaderPagina';
import './quemSomos.css';
import Depoimentos from '../../Components/Depoimento';
import Membros from './About/index'

export default function QuemSomos () {

   
    return (
        <>
            <HeaderPagina titleCategoria='Quem somos'/>
            <div className='div-main-quemSomos'>
            
                <div className="container-info">
                    {/* Imagem */}
                    <div className="img-leitura">
                        <Figure>
                            <Figure.Image alt="Imagem leitura" src={require(`./img/leitura.png`).default} />
                            <Figure.Caption className="img-credito">
                                Illustration by <a href="undefined">Natasha Remarchuk</a> from <a href="https://icons8.com/">Icons8</a>
                            </Figure.Caption>
                        </Figure>
                    </div>
                    {/* Sobre nós */}
                    <div className="inf-quemSomos-parent">
                        <div className="inf-quemSomos">
                            <h1>Missão</h1>
                            <p>Nossa missão é apoiar redes de bibliotecas comunitárias na garantia
                                do livre acesso à leitura, bem como na promoção do
                                senso crítico e potencial criativo de jovens e adultos leitores localizados em
                                pequenas comunidades e com baixo acesso a cultura literária. Acreditamos na importância dessa cultura
                                para o desenvolvimento cognitivo e intelectual do ser humano e, portanto, encaramos a leitura como  
                                um direito fundamental.  </p>
                        </div>
                        <div className="inf-quemSomos">
                            <h1>Valores</h1>
                            <p>Somos motivados pelos princípios de circularidade e empatia. Defendemos que todas as pessoas
                                tem direito ao livro e a leitura. Nosso trabalho é para que o exercício desse direito chegue em pequenas
                                comunidades, através da captação de doações de livros e envio às bibliotecas comunitárias. <br/>
                                Ética é inegociável.  
                                </p>
                        </div>
                    </div>
                </div>
                {/* Depoimentos */}
                <div className="container-depoimento" >
                    <Membros />
                    <Depoimentos />
                </div>

            </div>
           
           
           
                
          
                  
        </>    
    )
}