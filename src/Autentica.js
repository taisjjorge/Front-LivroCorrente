import React, {Navigate} from 'react'
import { Route } from 'react-router-dom';

async function Autentica (props) {
    const answer = await fetch("http://localhost:3001/autenticador",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        }})

    const data = await answer.json()
    if (data.Mensagem == "Liberado"){
        console.log("Deu True")
        return(
            <Route path={props.path} component={props.component} />
        )
    } else {
        console.log("Deu False")
        return (
            <Navigate to="/Login-Biblioteca" />
        )
    }
}

export default Autentica