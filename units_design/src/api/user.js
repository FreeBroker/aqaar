import axios from "axios";
import { Cookies } from "react-cookie";
import { proxy } from "../config";
import { loginfill } from "./personal_cookies";
const cookie = new Cookies();

export const signupaqar = async (phone, name, password,question,answer) => {
  return await axios.post(`${proxy}/user/sign_up`, { phone, password, name,question,answer });
};

export const loginaqar = async (phone, password) => {
  const res = await axios.post(`${proxy}/user/login`, { phone, password });
  if (res.data.token) {
    await cookie.set("user", "Bearer " + res.data.token);
    loginfill()
    return res.data;
  } else return res.data.message;
};

export const getprofileapi = async () => {
  const token = cookie.get("user");
  return await (
    await axios.get(`${proxy}/user/personal`, {
      headers: { Authorization: token },
    })
  ).data;
};

export const getallusers = async () => {
  const token = cookie.get("user");
  return await (
    await axios.get(`${proxy}/user/`, {
      headers: { Authorization: token },
    })
  );
};

export const banuser = async (id) => {
  const token = cookie.get("user");
  return await axios.put(`${proxy}/user/ban`, { id }, {
      headers: { Authorization: token },
    })

};

export const unbanuser = async (id) => {
  const token = cookie.get("user");
  return await axios.put(`${proxy}/user/unban`, { id }, {
      headers: { Authorization: token },
    })

};

export const forgotPassword = async ({phone,answer,password}) => {
  return await axios.post(`${proxy}/user/resetpassword`, { phone,answer,password })

};

export const getQuestion = async (phone) => {
  return await axios.post(`${proxy}/user/getquestion`, { phone })

};
export const deleteAccount = async (id) => {
  const token = cookie.get("user");
  return await axios.delete(`${proxy}/user/delete_profile`, {
      headers: { Authorization: token },
    })
};
export const updateAccount = async (data) => {
  const token = cookie.get("user");
  return await axios.patch(`${proxy}/user/update_profile`,data, {
      headers: { Authorization: token },
    })
};