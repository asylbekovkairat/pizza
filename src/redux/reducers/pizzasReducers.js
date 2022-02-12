import { GET_ALL_PIZZA } from "../actionTypes"

const pizzaState = {
  isLoading:true,
  data: null
}
  
  export const pizzaReducer = (state = pizzaState, action) => {
    switch (action.type){
      case GET_ALL_PIZZA:
        return {
          ...state, data: action.payload
        }
      default:
        return state  
    }
  }
  