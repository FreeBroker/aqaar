import axios from "axios";
import { Cookies } from "react-cookie";
const endPoint = `/saved/`

const cookie = new Cookies();

export const createSaved = async (data) => {
    const token = cookie.get("jobsUser")
    return await axios.post(`https://subb.aqaarfb.com${endPoint}`, data, {
        headers: { Authorization: token },
    });
};

export const getSaved = async () => {
    const token = cookie.get("jobsUser")
    return await axios.get(`https://subb.aqaarfb.com${endPoint}`, {
        headers: { Authorization: token },
    });
};

export const getMySaved = async () => {
    const token = cookie.get("jobsUser")
    return await axios.get(`https://subb.aqaarfb.com${endPoint}my_saved`, {
        headers: { Authorization: token },
    });
};

export const deleteSaved = async (id) => {
    const token = cookie.get("jobsUser")
    return await axios.delete(`https://subb.aqaarfb.com${endPoint}${id}`, {
        headers: { Authorization: token },
    });
};