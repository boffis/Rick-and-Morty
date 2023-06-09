import { ADD_FAV, REMOVE_FAV } from "./types"

const initialState = {fav : []}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
         case ADD_FAV: {
            return {
                ...state,
                fav : [...state.fav, action.payload]
            }
         }
         case REMOVE_FAV:{
            const removed = state.fav.filter( char => char.id !== action.payload )
            return{
                ...state,
                fav: [removed]
            }
         }
         default :
         return {...state}
    }
}

export default reducer