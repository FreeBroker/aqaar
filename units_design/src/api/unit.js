import axios from "axios";
import { Cookies } from "react-cookie";
import { proxy } from "../config";
const cookie = new Cookies(); //for the creation token

export const getall = async () => {
  return await axios.get(`${proxy}/unit`);
};
export const getone = async (_id) => {
  const isAdmin= cookie.get("admin") || false;
  if(isAdmin){
    const token = cookie.get("user");
    return await axios.get(`${proxy}/unit/admin/${_id}`, {
      headers: { Authorization: token }});
  }
  return await axios.get(`${proxy}/unit/${_id}`);
};

export const PostAdsrv = async (unitdata) => {
  const token = cookie.get("user");
  return await axios.post(`${proxy}/unit/create_ad`, unitdata, {
    headers: { Authorization: token },
  });
};
export const getmy = async () => {
  const token = cookie.get("user");
  return await axios.get(`${proxy}/unit/my`, {
    headers: { Authorization: token },
  });
};

export const filter = async (query) => {
  console.log(query)
  return await axios.post(`${proxy}/unit/filter`, {
    selltype: query.selltype,
    type2: query.type2,
    location:query.location,
    rooms: query.rooms,
    bathrooms: query.bathrooms,
    minsize: query.minArea,
    maxsize: query.maxArea,
    minprice: query.minPrice,
    maxprice: query.maxPrice,
  });
};

export const gethomeids = async () => {
  return await axios.post(`${proxy}/unit/gethome/`);
};

export const assigenhome = async (id) => {
  const token = cookie.get("user");
  return await axios.put(`${proxy}/unit/sethome/${id}`,{}, {
    headers: { Authorization: token },
  });
};
export const removehome = async (id) => {
  const token = cookie.get("user");
  return await axios.put(`${proxy}/unit/removehome/${id}`,{}, {
    headers: { Authorization: token },
  });
};

export const adminquery = async (title) => {
  const token = cookie.get("user");
  return await axios.post(`${proxy}/unit/adminsearch/${title}`,{}, {
    headers: { Authorization: token },
  });
};

export const gethome = async () => {
  return await axios.post(`${proxy}/unit/gethomeunits`);
};

export const getlocations = async () => {
  return await axios.post(`${proxy}/unit/location`);
};
export const getbyuser = async (id) => {
  const token = cookie.get("user");
  return await axios.get(`${proxy}/unit/by_user/${id}`, {
    headers: { Authorization: token },
  });
};

export const updateunit = async (unitdata,id) => {
 const token = cookie.get("user");
  return await axios.put(`${proxy}/unit/updateunit/${id}`, unitdata, {
    headers: { Authorization: token },
  });
};

export const getlatest = async () => {
  return await axios.get(`${proxy}/unit/latest`);
};

export const getPending = async () => {
  const token = cookie.get("user");
  return await axios.get(`${proxy}/unit/pending`, {
    headers: { Authorization: token },
  });
};
export const approve = async (id) => {
  const token = cookie.get("user");
  return await axios.put(`${proxy}/unit/approve/${id}`,{}, {
    headers: { Authorization: token },
  });
};
export const decline = async (id) => {
  const token = cookie.get("user");
  return await axios.delete(`${proxy}/unit/decline/${id}`, {
    headers: { Authorization: token },
  });
};

export const search = async (string) => {
  return await axios.get(`${proxy}/unit/search/${string}`
  );
};

export const deleteunit = async (id) => {
  const token = cookie.get("user");
  return await axios.delete(`${proxy}/unit/delete/${id}`, {
    headers: { Authorization: token },
  });
};