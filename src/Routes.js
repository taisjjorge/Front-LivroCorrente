import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Bibliotecas from './Pages/Bibliotecas/Bibliotecas';
import QuemSomos from './Pages/QuemSomos/QuemSomos';
import Campanhas from './Pages/Campanhas/Campanhas';
import ValidaVoluntario from './Pages/ValidaVoluntario'
import ValidaBiblioteca from './Pages/ValidaBiblioteca'
import MapView from './Pages/PontosDeColeta/index'

import PrivateRoute from './Autentica'

function Valido() {
    return(
        <h1>Valido</h1>
    )
}


function Routes() {



    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Bibliotecas" component={Bibliotecas} />
                <Route path="/QuemSomos" component={QuemSomos} />
                <Route path="/Campanhas" component={Campanhas} />
                <Route path="/Login-Voluntario" component={ValidaVoluntario} />
                <Route path="/Login-Biblioteca" component={ValidaBiblioteca} />
                <Route path="/PontosColeta" component={MapView} />
                {/* Teste, não atrapalha nada se não tentar ir pra esse path aí */}
                <PrivateRoute path="/Aleatorio" component={Valido} /> 
            </Switch>
        </main>
    );
}

export default Routes;
