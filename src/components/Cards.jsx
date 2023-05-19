import Card from './Card';

export default function Cards(props) {
   let list = props.characters.map ((character) => <li key={character.id}>
      <Card
      id = {character.id}
      name ={character.name}
      status = {character.status}
      species = {character.species}
      gender = {character.gender}
      origin = {character.origin.name}
      image = {character.image}
      onClose = {() => window.alert('Emulamos que se cierra la card')}
      />
      </li>)
   return <div>
      <ul>{list}</ul>
   </div>;
}
