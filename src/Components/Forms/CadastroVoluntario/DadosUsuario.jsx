import React, { useState } from "react";

import { Button, TextField, FormControl, Typography } from '@material-ui/core';
import '../Forms.css';


export default function DadosUsuario({ aoEnviar, validacoes }) {
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({senha:{valido:true, texto:""}})

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
                        aoEnviar({ user, senha });
                    }
                  }}>

                <FormControl className="form" method="POST">

                    <TextField 
                        value={user}
                        onChange={(event) => {
                          setUser(event.target.value);
                        }}
                        id="user"
                        name="user"
                        label="Usuário"
                        type="text"
                        required
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField 
                        value={senha}
                        onChange={(event) => {
                          setSenha(event.target.value);
                        }}
                        onBlur={validarCampos}
                        error={!erros.senha.valido}
                        helperText={erros.senha.texto}
                        id="senha"
                        name="senha"
                        label="Senha"
                        type="password"
                        required
                        variant="outlined"
                        margin="normal"             
                    />

                        <Button color="primary" active type="submit">Próximo</Button>
                    
                </FormControl>
            </form>
        </>
    )
}