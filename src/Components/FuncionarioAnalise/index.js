import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import './funcionarios.css'

function FuncionariosAnalise(props) {

  const [resp, setResp] = useState()

  async function Update(estado){
    const answer = await fetch("http://localhost:3001/alterar/funcionario",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer "+ localStorage.getItem("token")
        },
        body: JSON.stringify({
          "estado": estado,
          "id": props.id  
        })})

    const data = await answer.json()
    setResp(data.Mensagem)
  }

  if(resp == "Atualizou"){
    return(<Redirect to="/Livros" />)
  } else if (resp == "Token Invalido"){
    return(<Redirect to="/Login-Biblioteca" />)
  }


    return(
    <div className="card-funcionario">
      <div className="info-funcionario">
        <h4>Nome: {props.nome}</h4>
        <p>Email: {props.email}</p>
        <p>Função: {props.atividade}</p>
        <Button onClick={() => {Update("Aceito")}} variant="success" className="Aceitar">Aceitar</Button>
        <Button onClick={() => {Update("Recusado")}}variant="danger" className="Recusar">Recusar</Button>
      </div>
    </div>
    )
}

export default FuncionariosAnalise