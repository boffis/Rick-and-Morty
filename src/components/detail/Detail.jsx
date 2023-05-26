import axios from "axios"
import { useParams } from "react-router-dom"
import React from "react"
import { useState } from "react"

export default function Detail(props) {
    const params =useParams()
    const {id} = params

    const [character, setCharacter]= useState ({})

    React.useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(

        <div>
            <div>
                <h1>{character.name}</h1>
                <h3>{`status: ${character.status}`}</h3>
                <h3>{`species: ${character.species}`}</h3>
                <h3>{`gender: ${character.gender}`}</h3>
                
            </div>
            <div>
            <img src={character.image}alt={character.name} />
            </div>
        </div>
    )
}