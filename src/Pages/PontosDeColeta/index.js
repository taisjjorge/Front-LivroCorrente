import React, { useState } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Icone from './img/LivroC.png'
import Ponto from '../../Components/Pontos/index'


const Imagem = new L.icon({
  iconUrl: Icone,
  iconSize: [50, 75]
})

const MapView = ()=> {

  const [biblioteca, setBiblioteca] = useState([]);

  React.useState(async () => {
      const answer = await fetch("http://localhost:3001/bibliotecas")
      const data = await answer.json()
      setBiblioteca(data);

  }, []);


  const Pontos = biblioteca.map(item => 
  <Ponto 
  latitude={item.latitude_biblioteca}
  longitude={item.longitude_biblioteca} 
  Imagem={Imagem}
  imagem_biblioteca={item.imagem_biblioteca}
  nome={item.nome_biblioteca}
  estado={item.estado_biblioteca}
  cidade={item.cidade_biblioteca}
  bairro={item.bairro_biblioteca}
  logadouro={item.logadouro_biblioteca}
  numero={item.numero_biblioteca}
  email={item.email_biblioteca}
  telefone={item.telefone_biblioteca}

  /> )
    
   return(

    <MapContainer className="Mapview" center={[-22.9721002,-44.0975676]} zoom={10} scrollWheelZoom={false} style={{ margin: "0 auto", height: "95vh", width:"95vw" }}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {Pontos}
  </MapContainer>
   )
}

export default MapView;