
import './headerPagina.css';
import { Container } from 'react-bootstrap';


export default function HeaderPagina (props) {
    return (
      <Container fluid className="titulo-bg">
        <h1>{props.titleCategoria}</h1>
      </Container>
    );
    }
