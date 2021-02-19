import React, { useState } from "react";
import { Button, Typography, FormControl, NativeSelect, TextField } from '@material-ui/core';
import '../Forms.css';


export default function DadosIdentificacao({aoEnviar, validacoes}) {
        const [nome, setNome] = useState("");
        const [cpf, setCpf] = useState("");
        const [email, setEmail] = useState("");
        const [celular, setCelular] = useState("");
        const [rede, setRede] = useState(Number);
        const [biblio, setBiblio] = useState(Number);
        const [vinculo, setVinculo] = useState("");

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
    const [bibliotecas, setBibliotecas] = useState([])

    async function Func1(id){
        const answer = await fetch("https://back-livro-corrente.herokuapp.com/formulario",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({"id":id})})

        const data = await answer.json()
        setBibliotecas(data)
        }

    async function PegaBiblioteca(event){
        if (event.target.value != ''){
            const id=event.target.value
            Func1(id)
        }
    }

    const options = bibliotecas.map(item => <option value={item.id_biblioteca}>{item.nome_biblioteca}</option>)

    return(
        <>

        <form
            onSubmit={(event) => {
                event.preventDefault();
                if(possoEnviar()){
                    aoEnviar({ nome, cpf, email, celular, rede, biblio, vinculo });
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
                          setRede(event.target.value);
                          PegaBiblioteca(event)
                        }}
                    >
                        <option value=""></option>
                        <option value="1">Mar de Leitores</option>
                        <option value="2">Rede Baixada Literária</option>
                        <option value="3">Tecendo Uma Rede de Leitura</option>
                    </NativeSelect><br></br>

                <Typography id="select">
                    Selecione a Biblioteca correspondente
                </Typography>
                    <NativeSelect id="select-2"
                        checked={biblio}
                        value={biblio}
                        onChange={(event) => {
                        setBiblio(event.target.value);
                        }}
                    >
                        <optgroup label="Bibliotecas: ">
                            <option value='1' />
                            {options}
                        </optgroup>
                        
                    </NativeSelect>
                        <br/>

                <Typography id="select">
                    Vínculo com a Biblioteca
                </Typography>
                    <TextField
                        value={vinculo}
                        onChange={(event) => {
                            setVinculo(event.target.value);
                            }}
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


