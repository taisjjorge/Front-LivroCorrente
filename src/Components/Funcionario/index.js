import { Button } from 'react-bootstrap'
import './funcionarios.css'

function Funcionarios(props) {
    return(
    <div className="card-funcionario">
      <div className="info-funcionario">
        <h4>Nome: {props.nome}</h4>
        <p>Email: {props.email}</p>
        <p>Função: {props.atividade}</p>  
      </div>
    </div>
    )
}

export default Funcionarios