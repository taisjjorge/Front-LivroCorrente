// import { CadastroVoluntario } from '../../Components/Forms/CadastroVoluntario'
import FormularioCadastro from '../../Components/Forms/CadastroVoluntario/FormularioCadastro'
import { Container } from '@material-ui/core';
import { Tabs, Tab } from 'react-bootstrap';
import  Login  from '../../Components/Forms/Login'



import {validarCelular, validarCpf, validarNome, validarSenha} from '../../Components/Forms/models/cadastro'

export default function ValidaVoluntario() {
    
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
                        validacoes={{cpf:validarCpf, senha:validarSenha, nome:validarNome, celular:validarCelular}}
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