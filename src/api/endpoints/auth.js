import axios from "../axios";

const endpoints = {
  registration: (data) => axios.post("/users/register", data),
  login: (data) => axios.post("/users/login", data),
  getProfile: () => axios.post("/users/getme"),
  getViewBasket: () => axios.get("/view-baskets"),
};

export const { registration, login, getProfile, getViewBasket } = endpoints;
