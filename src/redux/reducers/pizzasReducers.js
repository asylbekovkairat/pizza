import { MENU_PIZZA } from "../actionTypes"

const pizzaState = {
    data: JSON.parse(localStorage.getItem('menu')) || [],
  }
  
  export const pizzaReducer = (state = pizzaState, action) => {
    switch (action.type){
      case MENU_PIZZA:
        return {
          ...state, data: action.payload
        }
      default:
        return state  
    }
  }
  