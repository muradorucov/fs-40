import axios from "axios";
import { userApi } from "../api"

export const register = async (body) => {
  const res = await userApi.post("/users", body);
  if (!res.data) {
    throw new Error("Register User fetch Error");
  }
  return res.data
}

export const login = async (body) => {
  const res = await userApi.get(`/users?email=${body.email}`);
  if (!res.data || !res.data.length) {
    throw new Error("Login User fetch Error");
  }



  if (res.data[0].password === body.password) {
    return res.data[0]
  }
  throw new Error("Password or email is not correct");

}


