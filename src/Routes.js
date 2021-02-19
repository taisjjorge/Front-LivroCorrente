import React from 'react'

import { Switch, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import MenuAlterado from './Components/MenuAlterado'

import Home from './Pages/Home/Home';
import Bibliotecas from './Pages/Bibliotecas/Bibliotecas';
import QuemSomos from './Pages/QuemSomos/QuemSomos';
import Campanhas from './Pages/Campanhas/Campanhas';
import ValidaVoluntario from './Pages/ValidaVoluntario'
import ValidaBiblioteca from './Pages/ValidaBiblioteca'
import MapView from './Pages/PontosDeColeta/index'
import Livros from './Pages/Livros/Livros'
import AddLivros from './Pages/AdicionarLivro/index'
import Funcionarios from './Pages/Funcionarios/Funcionarios'

 
import PrivateRoute from './Autentica'


function Routes() {

    const Header = () => {
        return(localStorage.getItem('token') ? <MenuAlterado /> : <Menu />)
    }

    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Bibliotecas" component={Bibliotecas} />
                    <Route path="/QuemSomos" component={QuemSomos} />
                    <Route path="/Campanhas" component={Campanhas} />
                    <Route path="/Login-Voluntario" component={ValidaVoluntario} />
                    <Route path="/Login-Biblioteca" component={ValidaBiblioteca} />
                    <Route path="/PontosColeta" component={MapView} />
                    <PrivateRoute path="/Livros" component={Livros} /> 
                    <PrivateRoute path="/AddLivros" component={AddLivros} />
                    <PrivateRoute path="/Funcionarios" component={Funcionarios} />
                </Switch>
            </main>
        </>
    );
}

export default Routes;
