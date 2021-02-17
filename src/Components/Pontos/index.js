import React from 'react'
import { Marker, Popup, Tooltip } from 'react-leaflet'


function Ponto(props) {
    return(
    <Marker position={[props.latitude, props.longitude]} icon={props.Imagem}>
      <Popup>
        <img style={{width: 300}} src={require(`../Biblioteca/img/${props.imagem_biblioteca}`).default} />
        <h4>{props.nome}</h4>
        <p>Endereço: {props.estado} - {props.cidade} - {props.bairro} - {props.logadouro} {props.numero}</p>
        <p>Email: {props.email}</p>
        <p>Telefone: {props.telefone}</p>
      </Popup>
      <Tooltip>
        {props.nome}  
      </Tooltip>
    </Marker>
    )
}

export default Ponto