import React, {useEffect, useState} from 'react'
/* Libreria externa */
import {
    Link
  } from "react-router-dom";

const Nosotros = () => {

    const [equipo, setEquipo] = useState([]); 

    useEffect(() => {
        obtenerDatos();
    },[])

    const obtenerDatos = async () => {
        const data  = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json()
        console.log(users);
        setEquipo(users.civilizations);
    }

    return (
        <div>
            <h2>Nosotros</h2>
            <ul>
                 {
                      equipo.map( item => (
                            <li key={item.id}>
                                <Link to={`nosotros/${item.id}`}>
                                  {item.name} - {item.expansion}
                                </Link>
                            </li>
                       )
                      )
                 }
            </ul>
        </div>
    )
}

export default Nosotros
