import React, { useState } from "react";

import { Button, Typography, FormControl, NativeSelect, InputLabel, TextField } from '@material-ui/core';
import '../Forms.css';


export default function DadosIdentificacao({aoEnviar, validacoes}) {
        const [nome, setNome] = useState("");
        const [cpf, setCpf] = useState("");
        const [email, setEmail] = useState("");
        const [celular, setCelular] = useState("");
        const [rede, setRede] = useState(true);
        const [biblio, setBiblio] = useState(true);

        const [erros, setErros] = useState({cpf:{valido:true, texto:""}, nome:{valido:true, texto:""}, celular:{valido:true, texto:""}})

    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    //function para não permitir que o usuário avance no cadastro sem preencher os campos corretamente
    function possoEnviar(){
        //iterar sobre o estado de erros
        for(let campo in erros) {
            if(!erros[campo].valido) {
             return false
         }
     }
        return true;
  }

    return(
        <>

        <form
            onSubmit={(event) => {
                event.preventDefault();
                if(possoEnviar()){
                    aoEnviar({ nome, cpf, email, celular, rede, biblio });
                }     
            }}>

            <Typography variant="h7">Apoiamos todas as bibliotecas comunitárias que estão localizadas no Rio de Janeiro
                e possuem cadastro ativo na <a href="https://rnbc.org.br/redes-e-bibliotecas/"> Rede Nacional de 
                Biblioteca Comunitárias</a><br/>
            </Typography>

            <FormControl className="form" method="POST">
                        
                <TextField 
                    value={nome}
                    onChange={(event) => {
                        setNome(event.target.value);
                    }}
                    onBlur={validarCampos}
                    error={!erros.nome.valido}
                    helperText={erros.nome.texto}
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    type="text"
                    required
                    variant="outlined"
                    margin="normal"
                />

                <TextField 
                    value={cpf}
                    onChange={(event) => {
                        setCpf(event.target.value);
            
                    }}
                    onBlur={validarCampos}
                    error={!erros.cpf.valido}
                    helperText={erros.cpf.texto}
                    id="cpf"
                    name="cpf"
                    label="CPF"
                    required
                    variant="outlined"
                    margin="normal"             
                />

                <TextField 
                    value={email}
                    onChange={(event) => {
                    setEmail(event.target.value);
                    }}
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        required
                        variant="outlined"
                        margin="normal"
                    />

                <TextField 
                value={celular}
                onChange={(event) => {
                setCelular(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.celular.valido}
                helperText={erros.celular.texto}
                    id="celular"
                    name="celular"
                    type="number"
                    label="Celular"
                    required
                    variant="outlined"
                    margin="normal"             
                /><br></br>


                <Typography id="select">
                    Selecione a Rede correspondente
                </Typography>
                
                    <NativeSelect id="select"
                        checked={rede}
                        value={rede}
                        onChange={(event) => {
                          setRede(event.target.checked);
                        }}
                    >
                        <option value="rede"></option>
                        <option value="rede">Mar de Leitores</option>
                        <option value="rede">Rede Baixada Literária</option>
                        <option value="rede">Tecendo Uma Rede de Leitura</option>
                    </NativeSelect><br></br>

                <Typography id="select">
                    Selecione a Biblioteca correspondente
                </Typography>
                    <NativeSelect id="select-2"
                        checked={biblio}
                        value={biblio}
                        onChange={(event) => {
                        setBiblio(event.target.checked);
                        }}
                    >
                        <option value="biblio"></option>
                        <option value="biblio">Casa Azul</option>
                        <option value="biblio">Ciranda da Tarituba</option>
                        <option value="biblio">Colibri</option>
                        <option value="biblio">Itaxí Mirim</option>
                        <option value="biblio">Quilombo Campinho da Independência</option>
                    </NativeSelect>
                        <br/>

                <Typography id="select">
                    Vínculo com a Biblioteca
                </Typography>
                    <TextField 
                        id="vinculo"
                        name="vinculo"
                        label="Ex: assistente, bibliotecário, etc"
                        required
                        variant="outlined"
                        margin="normal"             
                    /><br></br>
                    
                <Button 
                    type="submit" 
                    color="primary" 
                    active>Quase lá...</Button>
            </FormControl>
        </form>
        </>
    )
}


