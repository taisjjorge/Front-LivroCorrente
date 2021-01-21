import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
//import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 


const MapView = ()=> {
    
   return(

    <MapContainer className="Mapview" center={[-22.9432688, -43.3160214]} zoom={11} scrollWheelZoom={false} style={{ margin: "0 auto", height: "95vh", width:"95vw" }}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-22.9432688, -43.3160214]}>
      <Popup>
        Biblioteca Tal
      </Popup>
    </Marker>
  </MapContainer>
   )
}

export default MapView;