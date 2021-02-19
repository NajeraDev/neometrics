import React, {useState} from 'react'

function Map(){

    const [MapInfo, setMapInfo] = useState({
        street: "Av Unidad Deportiva",
        number: 2047,
        neighborhood: "Maravillas",
        city:"Puebla",
        country: "Mexico"
    })

    const search = `${MapInfo.street}+${MapInfo.number},${MapInfo.neighborhood},${MapInfo.city}+${MapInfo.country}`
    const fullSearch = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAtQ0wzxDM8-Fq7mB80KLbqrvIOcFMwmmg&q=${search}`

    return(
        <iframe
  width="600"
  height="450"
  loading="lazy"
  allowfullscreen
  src={fullSearch}>
</iframe>
    )
}

export default Map;