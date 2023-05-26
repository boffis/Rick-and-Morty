import { ADD_FAV, REMOVE_FAV } from "./types"

const initialState = {fav : []}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
         case ADD_FAV: {
            return {
                ...state,
                fav : [...state.fav, payload]
            }
         }
         case REMOVE_FAV:{
            const removed = fav.filter(
                char=>char.id !== payload
            )
            return{
                ...state,
                fav: [removed]
            }
         }
    }
}

export default reducer