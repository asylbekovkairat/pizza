import { ADD_PIZZA } from './../actionTypes';
const basketState = {
    data: JSON.parse(localStorage.getItem('basket')) || [],
  }
  
export const basketReducer = (state = basketState, action) => {
  switch (action.type) {
    case ADD_PIZZA:
      return {
        ...state, data: action.payload
      };
    default:
      return state
  }
}
  