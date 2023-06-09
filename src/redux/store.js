import reducer from "./reducer"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;


const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default store;