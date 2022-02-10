import {
  createStore,
  combineReducers
} from "redux"
import { authReducer } from "./reducers/authReducer" 
import { basketReducer } from "./reducers/basketReducers"
import { pizzaReducer } from "./reducers/pizzasReducers"


export const store = createStore(combineReducers({
  auth: authReducer,
  basket: basketReducer,
  pizzas: pizzaReducer
}))
window.store = store;