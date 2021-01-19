import React, { useState } from "react";
import { Button, Typography, FormControl, FormControlLabel, Switch, TextField, Container } from '@material-ui/core';
import '../Forms.css';


export default function Necessidade({aoEnviar, validacoes}) {

    const [solicitacao, setSolicitacao] = useState("");
    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [qtde, setQtde] = useState("");

    const [erros, setErros] = useState({qtde:{valido:true, texto:""}})

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

        <form
            onSubmit={(event) => {
                event.preventDefault();
                if(possoEnviar()){
                    aoEnviar({ solicitacao, titulo, genero, qtde  });
                }     
            }}>

            <FormControl className="form" method="POST">
                <Typography varint="h5">
                    É possível pré-cadastrar sua demanda por livros em nossas bases.<br/>
                    Deseja nos enviar alguma solicitação?
                </Typography>
                <br/>
                <FormControlLabel label="Sim, quero solicitar"
                            control={<Switch checked={solicitacao} onChange={(event) => {
                                setSolicitacao(event.target.checked) //checked para Switch
                            }} name="ofertas"
                                color="primary" />} />

                        <TextField 
                            value={titulo}
                            onChange={(event) => {
                            setTitulo(event.target.value);
                            }}
                                id="titulo"
                                name="titulo"
                                label="Título do livro"
                                type="text"
                                variant="outlined"
                                margin="normal"
                                
                        />

                        <TextField 
                            value={genero}
                            onChange={(event) => {
                            setGenero(event.target.value);
                            }}
                                id="genero"
                                name="genero"
                                label="Gênero do livro"
                                type="text"
                                variant="outlined"
                                margin="normal"
                                
                        />

                        <TextField 
                            value={qtde}
                            onChange={(event) => {
                            setQtde(event.target.value);
                            }}
                            onBlur={validarCampos}
                            error={!erros.qtde.valido}
                            helperText={erros.qtde.texto}
                                id="qtde"
                                name="qtde"
                                label="Número de exemplares"
                                type="number"
                                variant="outlined"
                                margin="normal"
                                
                                          
                        />
                
                <Button type="submit" color="primary"  active>Finalizar</Button>                
            </FormControl>
        </form>
)}

