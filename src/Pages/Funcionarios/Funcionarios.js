import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import FuncionarioAnalise from '../../Components/FuncionarioAnalise/index'
import Funcionario from '../../Components/Funcionario'
import HeaderPagina from '../../Components/HeaderPagina'
import { Container, Row } from 'react-bootstrap'

function Funcionarios(){

    const [ funcionarios, setFuncionarios] = useState([])

    useEffect( async () => {

        const answer = await fetch("http://localhost:3001/funcionarios",{
            method: "POST",
            headers:{"Content-Type":"application/json",
            "Authorization": "Bearer "+ localStorage.getItem("token")
            }
        })

        const data = await answer.json()

        if (data.Mensagem == "Token Invalido"){
            return(<Redirect to="/Login-Biblioteca"/>)
        }

        setFuncionarios(data)
    }, [funcionarios])
    
    const func = funcionarios.map(item => {
        if(item.valido_funcionario=="Aceito"){
            return(<Funcionario
                id={item.id_funcionario}
                nome={item.nome_funcionario}
                email={item.email_funcionario}
                atividade={item.atividade_funcionario}
                Biblioteca={item.nome_biblioteca}
            />)
        }
    })

    const funcAnalise = funcionarios.map(item =>{
        if(item.valido_funcionario=="Em Analise"){
            return(<FuncionarioAnalise
                id={item.id_funcionario}
                nome={item.nome_funcionario}
                email={item.email_funcionario}
                atividade={item.atividade_funcionario}
                Biblioteca={item.nome_biblioteca}
                />)
        }
    })
    

    return(
        <>
        <HeaderPagina titleCategoria='Funcionarios' />
        <Container>
        <h1 class="display-4 mt-4">Ativos</h1>
        <Row>
            {func}
        </Row>
        <hr />
        <h1 class="display-4 mb-4">Pendentes</h1>
        <Row>
            {funcAnalise}
        </Row>
        </Container>
        </>
    )

}

export default Funcionarios