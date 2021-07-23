import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const User = () => {


    //recibe parametros
    const {id} = useParams();
    console.log(id);

    const [pueblo, setPueblo] = useState([]) 

    useEffect(() => {
        
        const obtenerDatos = async () => {
            const data  = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const users = await data.json()
            console.log(users);
            setPueblo(users);
        }

        obtenerDatos();
        
    },[id])

  


    return (
        <div>
            <h1>{pueblo.name}</h1>
            <p>{pueblo.team_bonus}</p>
        </div>
    )
}

export default User
