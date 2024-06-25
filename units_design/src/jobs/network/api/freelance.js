
import axios from "axios";
import { Cookies } from "react-cookie";
const endPoint = `/freelancer/`

const cookie = new Cookies();

export const signupapi = async (signupForm) => {
    return await axios.post(`https://subb.aqaarfb.com${endPoint}signup`, signupForm);
};

export const getProfile = async () => {
    const token = cookie.get("jobsUser")
    return await axios.get(`https://subb.aqaarfb.com${endPoint}`, {
        headers: { Authorization: token },
    });
};