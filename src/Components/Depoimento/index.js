import { Carousel } from 'react-bootstrap';
import './depoimentos.css';

export default function Depoimentos() {
    return (

        <Carousel>
            <Carousel.Item interval={3000} >
                <img className="img-banner d-block w-100"src="https://i.imgur.com/gitl40R.png" alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item interval={3000} >
                <img className="img-banner d-block w-100"src="https://i.imgur.com/gitl40R.png" alt="Second slide"/>
            </Carousel.Item>
        </Carousel >
    
    );
};
