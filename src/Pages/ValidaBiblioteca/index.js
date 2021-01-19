import FormularioCadastro  from '../../Components/Forms/CadastroBiblioteca/FormularioCadastro'
import  Login  from '../../Components/Forms/Login'
import { Container } from '@material-ui/core';
import { Tabs, Tab } from 'react-bootstrap';

import { validarCpf, validarNome, validarSenha, validarCelular, validarQtde} from '../../Components/Forms/models/cadastro'

export default function ValidaBiblioteca() {
  
    return(
        <Container 
            component="aticle"
            maxWidth="sm" >

            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                <Tab eventKey="login" title="Login">
                    <Login  />
                </Tab>
                <Tab eventKey="cadastro" title="Cadastre-se">
                    <FormularioCadastro 
                        aoEnviar={aoEnviarForm} 
                        validacoes={{cpf:validarCpf, senha:validarSenha, nome:validarNome, celular:validarCelular, qtde:validarQtde}}
                    />
                </Tab>
            </Tabs>
        <br></br><br></br>
        </Container>
    )
}

export function aoEnviarForm(dados){
    console.log(dados);
}   //printa no console os dados do FormCad
  
