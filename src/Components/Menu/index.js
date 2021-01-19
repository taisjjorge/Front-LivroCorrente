import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './menu.css';



function BaseMenu(props) {
    const { location }  = props
    return (

   
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
                    <Nav.Link className="nav-link" as={Link} to="/Bibliotecas/Bibliotecas" href="/Bibliotecas/Bibliotecas">Bibliotecas</Nav.Link>
                    
                    <Nav.Link className="nav-link" as={Link} to="/QuemSomos" href="/QuemSomos">Quem somos</Nav.Link>
                    <Nav.Link className="nav-link" as={Link} to="/Contato" href="/Contato">Pontos de Coleta</Nav.Link>
                    
                </Nav>  
                <Nav>
                    <NavDropdown className="nav-link" title="Cadastro/Login" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to= "/Login-Voluntario">Voluntário</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to= "/Login-Biblioteca">Biblioteca</NavDropdown.Item>
                    </NavDropdown>
                </Nav>      
            </Navbar.Collapse>
        </Navbar>

    );
};

const Menu = withRouter(BaseMenu);

export default Menu;