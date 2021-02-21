import React, {useEffect, useState} from 'react'
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
import CadastroCampanhas from './Pages/CadastroCampanhas/CadastroCampanhas'
import AddLivros from './Pages/AdicionarLivro/index'
import Funcionarios from './Pages/Funcionarios/Funcionarios'
import Voluntarios from './Pages/Voluntarios'
import Parceiros from './Pages/Parceiros'

 
import PrivateRoute from './Autentica'


function Routes() {

    const [ Rmenu, setRmenu ] = useState()

    useEffect(() => {
        setInterval(() => {
            if(localStorage.getItem('token') != null){
                setRmenu( () => {
                    return(<MenuAlterado />)
                })
            } else {
                setRmenu( () => {
                    return(<Menu />)
                })
            }
        },500)
    }, [Rmenu])

    return (
        <>
            {Rmenu}
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Bibliotecas" component={Bibliotecas} />
                    <Route path="/QuemSomos" component={QuemSomos} />
                    <Route path="/Campanhas" component={Campanhas} />
                    <Route path="/Login-Voluntario" component={ValidaVoluntario} />
                    <Route path="/Login-Biblioteca" component={ValidaBiblioteca} />
                    <Route path="/PontosColeta" component={MapView} />
                    <Route path="/Voluntarios" component={Voluntarios} />
                    <Route path="/Parceiros" component={Parceiros} />
                   
                    <PrivateRoute path="/CadastroCampanhas" component={CadastroCampanhas} /> 
                    <PrivateRoute path="/AddLivros" component={AddLivros} />
                    <PrivateRoute path="/Funcionarios" component={Funcionarios} />
                </Switch>
            </main>
        </>
    );
}

export default Routes;
