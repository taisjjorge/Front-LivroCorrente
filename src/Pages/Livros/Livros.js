import React, {useState} from 'react'
import { Redirect, Link } from 'react-router-dom'
import CampanhaBiblioteca from '../../Components/CampanhaBiblioteca'
import CampanhaInativa from '../../Components/CampanhaInativa'


function Livros() {

    const [livros, setLivros] = useState([])

    useState( async () => {
        const answer = await fetch("http://localhost:3001/livros",{
            method: "POST",
            headers:{"Content-Type":"application/json",
            "Authorization": "Bearer "+ localStorage.getItem("token")
            }
        })
    
    const data = await answer.json()
    if (data.Mensagem == "Token Invalido"){
        return(<Redirect to="/Login-Biblioteca"/>)
    }

    setLivros(data)
    
    },[])

    const cardsAtivos = livros.map((item) => {
        if(item.valido_pedido.data == 1 ){
            return(
            <CampanhaBiblioteca 
            id={item.id_pedido}
            capa={item.capa_pedido}
            titulo={item.titulo_pedido}
            numeroExemplar={item.numeroExemplar_pedido}
            genero={item.genero_pedido}
            Biblioteca={item.nome_biblioteca}
            valido={item.valido_pedido.data} 
            />)
        }
    })

    const cardsInativos = livros.map((item) => {
        if(item.valido_pedido.data == 0 ){
            return(     
            <CampanhaInativa 
            id={item.id_pedido}
            capa={item.capa_pedido}
            titulo={item.titulo_pedido}
            numeroExemplar={item.numeroExemplar_pedido}
            genero={item.genero_pedido}
            Biblioteca={item.nome_biblioteca} 
            valido={item.valido_pedido.data}
            />)
            }
        }
    )


    return(
        <div class="container">
            <h1 class="display-4">Livros</h1>
            <Link to="/AddLivros"><button>Adicionar Livro</button></Link>
            <hr />
            <h1 class="display-4">Campanhas Ativas</h1>
            {cardsAtivos}
            <hr />
            <h1 class="display-4">Livros Adicionados</h1>
            {cardsInativos}
        </div>
    )
}
export default Livros