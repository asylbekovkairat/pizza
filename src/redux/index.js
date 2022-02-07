import {
  createStore,
  combineReducers
} from "redux"

const authState = {
  data: JSON.parse(localStorage.getItem("auth") || null),
}

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case "success auth":
      return {
        ...state, data: action.payload
      };
    case "logout auth":
      return {
        ...state, data: null
      }
    default:
      return state
  }
}

const basketState = {
  data: JSON.parse(localStorage.getItem('basket')) || [],
}

const basketReducer = (state = basketState, action) => {
  switch (action.type) {
    case "true basket":
      return {
        ...state, data: action.payload
      };
    case "false basket":
      return {
        ...state, data: []
      }
    default:
      return state
  }
}

const pizzaState = {
  data: JSON.parse(localStorage.getItem('menu'))
}

const pizzaReducer = (state = pizzaState, action) => {
  switch (action.type){
    case "true menu":
      return {
        ...state, data: action.payload
      }
    case "false menu":
      return{
        ...state, data: []
      }
    default:
      return state  
  }
}

export const store = createStore(combineReducers({
  auth: authReducer,
  basket: basketReducer,
  pizzas: pizzaReducer
}))
window.store = store;