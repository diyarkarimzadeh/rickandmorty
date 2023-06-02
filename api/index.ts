import Axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const api = Axios.create({
  baseURL: baseUrl,
});
