import { Carousel } from 'react-bootstrap';


export default function BannerPrincipal() {
    return (
    
        <Carousel>
            <Carousel.Item interval={3000} >
                <img className="img-banner d-block w-100"src="https://i.imgur.com/f42Qi6B.png" alt="First slide"/>
                <Carousel.Caption>
                    <h3 className="titulo-banner">Leitura</h3>
                    <p className="subtitulo-banner">Doe um livro e ajude uma biblioteca comunitária!</p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* <Carousel.Item interval={3000} >
                <img className="d-block w-100" src="#" alt="Second slide"/>
                <Carousel.Caption>
                    <h3>.</h3>
                    <p>.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel >

    );
};

