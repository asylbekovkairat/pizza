import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./reducers/authReducer" 
import { basketReducer } from "./reducers/basketReducers"
import { pizzaReducer } from "./reducers/pizzasReducers"
import { composeWithDevTools } from "redux-devtools-extension"

const rootReducers = combineReducers({
  auth: authReducer,
  basket: basketReducer,
  pizzas: pizzaReducer
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
window.store = store;