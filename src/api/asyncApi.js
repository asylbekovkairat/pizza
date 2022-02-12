import axios from "axios";
// import {
//   menuPizzaAC
// } from './../redux/actions/pizzaAction';

const api = axios.create({
  baseURL: "https://61dd7484f60e8f0017668817.mockapi.io",
})

export default {
  getAllPizzas: () => api.get("/pizza-card")
}

// export const fetchPizzas = () => {
//   return dispatch => {
//     fetch('https://61dd7484f60e8f0017668817.mockapi.io/pizza')
//       .then(res => res.json())
//       .then(json => dispatch(menuPizzaAC(json)))
//   }
// }