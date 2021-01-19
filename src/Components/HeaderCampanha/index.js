
import './headerCampanha.css';
import { Container } from 'react-bootstrap';


export default function HeaderCampanha (props) {
    return (
      <Container fluid className="titulo-bg-campanha">
        <h1>Campanhas: {props.nomeBiblioteca}</h1>
      </Container>
    );
    }
