import axios from "axios";
import { Cookies } from "react-cookie";
import { proxy } from "../config";
const cookie = new Cookies(); //for the creation token

export const getall = async () => {
  const token = cookie.get("user");
  return await axios.get(`${proxy}/wishlist`, {
    headers: { Authorization: token },
  });
};
export const create = async (unit_id) => {
  const token = cookie.get("user");
  return await axios.post(
    `${proxy}/wishlist/create`,
    { unit_id },
    { headers: { Authorization: token } }
  );
};
