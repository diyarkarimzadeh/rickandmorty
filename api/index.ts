import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
