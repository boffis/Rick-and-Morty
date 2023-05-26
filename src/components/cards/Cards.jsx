import Card from '../card/Card.jsx';
import style from "./Cards.module.css"

export default function Cards(props) {
   let list = props.characters.map ((character) => <li key={character.id} className={style.listItem}>
      <Card
      id = {character.id}
      name ={character.name}
      status = {character.status}
      species = {character.species}
      gender = {character.gender}
      origin = {character.origin.name}
      image = {character.image} 
      onClose = {props.onClose}
      />
      </li>)
   return (
   <div className={style.container}>
      <ul className={style.list}>
         {list}
      </ul>
   </div>
   )
}
