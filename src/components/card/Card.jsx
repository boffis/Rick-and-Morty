import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState } from "react";
import { connect } from "react-redux"


 function Card(props) {

   const [isFav, setIsFav] = useState(false)



   const handleFavorite = () =>{
      if (isFav){
         setIsFav (false);
         props.removeFav (props.id);
      } else {
         setIsFav (true)
         props.addFav (
            {id:props.id,
            name:props.name,
            status:props.status,
            species:props.species,
            gender:props.gender,
            origin:props.origin,
            image:props.image,}
         )
      }

   }   
   
   return (


      <div className={style.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }        
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

const mapDispatchToProps = (dispatch) => {
   return  {
      removeFav : (char) => {dispatch (removeFav(char))},
      addFav : (char) => {dispatch (addFav(char))}
   }
}

export default connect (null, mapDispatchToProps) (Card)