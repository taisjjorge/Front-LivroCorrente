import { useState } from "react"
import { Button, TextField, FormControl, Typography} from '@material-ui/core';
import { Redirect } from "react-router-dom";



export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")



    async function ValidandoLogin(event){
        event.preventDefault()

        const answer = await fetch("http://localhost:3001/login/funcionario",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({"dados":{
                "email": email,
                "senha": senha
            }})})
    
        const data = await answer.json()
        if (data.Mensagem == "Email incorreto"){
            alert("Email incorreto")
        } else if (data.Mensagem == "Senha incorreta") {
            alert("Senha incorreta")
        } else if (data.Mensagem == "Em Analise") {
            alert("Seu cadastro está em analise")
        } else if (data.Mensagem == "Recusado") {
            alert("Recusado")
        } else if (data.Mensagem == "Aceito") {
            localStorage.setItem("token", data.token)
            return(<Redirect to='/' />)
        } else {
            alert("Erro no cadastro")
        }
    } 

    return(
        <>
            <form onSubmit={ValidandoLogin}>

                <FormControl className="form" method="POST">
                <br></br>
                <Typography  variant="h5" component="h1" align="center">Login</Typography><br/>
                <p className="helper">Já possui cadastro? <br/>
                    Insira os dados para continuar</p>

                        <TextField 
                            id="email"
                            name="email"
                            label="Email"
                            type="text"
                            required
                            variant="outlined"
                            margin="normal"
                            onChange={event => setEmail(event.target.value)}
                        />

                        <TextField 
                            id="senha"
                            name="senha"
                            label="Senha"
                            type="password"
                            required
                            variant="outlined"
                            margin="normal"     
                            onChange={event => setSenha(event.target.value)}        
                        />

                        <Button color="primary" active type="submit">Entrar</Button>

                    </FormControl>
        
            </form>
        </>
    )
}

