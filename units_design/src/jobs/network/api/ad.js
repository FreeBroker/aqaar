
import axios from "axios";
import { Cookies } from "react-cookie";
const endPoint = `/ad/`

const cookie = new Cookies();

export const getMyAds = async () => {
    const token = cookie.get("jobsUser")
    return await axios.get(`https://subb.aqaarfb.com${endPoint}my_ads`, {
        headers: { Authorization: token },
    });
};

export const getAllAds = async () => {
    const token = cookie.get("jobsUser")
    return await axios.get(`https://subb.aqaarfb.com${endPoint}`, {
        headers: { Authorization: token },
    });
};


export const createAd = async (data) => {
    const token = cookie.get("jobsUser")
    return await axios.post(`https://subb.aqaarfb.com${endPoint}`, data, {
        headers: { Authorization: token },
    });
};

export const getAd = async (id) => {
    const token = cookie.get("jobsUser")
    return await axios.get(`https://subb.aqaarfb.com${endPoint}id/${id}`, {
        headers: { Authorization: token },
    });
};

export const deleteAd = async (id) => {
    const token = cookie.get("jobsUser")
    return await axios.delete(`https://subb.aqaarfb.com${endPoint}delete/${id}`, {
        headers: { Authorization: token },
    });
};