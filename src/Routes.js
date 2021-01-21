import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Bibliotecas from './Pages/Bibliotecas/Bibliotecas';
import QuemSomos from './Pages/QuemSomos/QuemSomos';
import Campanhas from './Pages/Campanhas/Campanhas';
import ValidaVoluntario from './Pages/ValidaVoluntario'
import ValidaBiblioteca from './Pages/ValidaBiblioteca'
import MapView from './Pages/PontosDeColeta/index'

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Bibliotecas" component={Bibliotecas} />
            <Route path="/QuemSomos" component={QuemSomos} />
            <Route path="/Campanhas" component={Campanhas} />
            <Route path="/Login-Voluntario" component={ValidaVoluntario} />
            <Route path="/Login-Biblioteca" component={ValidaBiblioteca} />
            <Route path="/PontosColeta" component={MapView} />
        </Switch>
    );
}

export default Routes;
