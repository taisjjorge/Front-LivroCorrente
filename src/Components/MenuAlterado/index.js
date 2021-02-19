import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './menu.css';



function BaseMenuAlterado(props) {
    const { location }  = props
    return (

        <header>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand  as={Link} to="/" href="/Home">
                <img
                    src="https://i.imgur.com/FtVCm1o.png"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="mr-auto">
                    <Nav.Link className="nav-link" as={Link} to="/Bibliotecas" href="/Bibliotecas">Bibliotecas</Nav.Link>
                    
                    <Nav.Link className="nav-link" as={Link} to="/QuemSomos" href="/QuemSomos">Quem somos</Nav.Link>
                    <Nav.Link  className="nav-link" as={Link} to="/PontosColeta" href="/PontosColeta">Pontos de Coleta</Nav.Link>
                    
                </Nav>  
                <Nav>
                    <Nav.Link  className="nav-link" as={Link} to="/Livros" href="/Livros">Livros</Nav.Link>
                </Nav>      
            </Navbar.Collapse>
        </Navbar>
        </header>

    );
};

const MenuAlterado = withRouter(BaseMenuAlterado);

export default MenuAlterado;