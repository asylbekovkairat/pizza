import axios from "axios";

const api = axios.create({
  baseURL: "https://61dd7484f60e8f0017668817.mockapi.io",
})

export default {
  getAllPizzas: () => api.get("/pizza-card")
}