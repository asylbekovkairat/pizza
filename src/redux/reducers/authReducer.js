import { AUTH_LOGOUT } from "./../actionTypes"
import { SUCCESS_AUTH } from './../actionTypes';

const authState = {
  data: JSON.parse(localStorage.getItem("auth") || null),
}

export const authReducer = (state = authState, action) => {
  switch (action.type) {
    case SUCCESS_AUTH:
      return {
        ...state, data: action.payload
      };
    case AUTH_LOGOUT:
      return {
        ...state, data: null
      }
    default:
      return state
  }
}