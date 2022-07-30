import { GET_ALL_PIZZA } from "../actionTypes";
import Api from "../../api/asyncApi.js";

export const getAllPizzas = (payload) => ({
  type: GET_ALL_PIZZA,
  payload,
});

export const getAllPizzasAsync = () => {
  return (dispatch) => {
    Api.getAllPizzas()
      .then((res) => {
        dispatch(getAllPizzas(res.data));
      })
      .catch((error) => console.log(error));
  };
};
