import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div className={style.container}>
         <button onClick={() => props.onClose(props.id)} >X</button>
         <Link to={`/detail/${props.id}`} >
         <h3 className={style.Name}>{props.name}</h3>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2> 
         <img src={props.image} alt='' /> 
      </div>
   );
}
