import style from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   //props tambein trae characters para extra 03
   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId (event.target.value)
   }

   return (

      <div className={style.container}>
         <input type='text'
         id="search"
         name="search"
         onChange={handleChange}
          />
         <button onClick={()=>(props.onSearch (id))} >Agregar</button> 
      </div>
   );
}
