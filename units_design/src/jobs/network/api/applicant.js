
import axios from "axios";
import { Cookies } from "react-cookie";
const endPoint = `/applicant/`

const cookie = new Cookies();

export const getNumberOfApplicants = async (id) => {
    const token = cookie.get("jobsUser")
    return await axios.get(`https://subb.aqaarfb.com${endPoint}id/${id}`, {
        headers: { Authorization: token },
    });
};

export const getApplicantsOfAd = async (id) => {
    const token = cookie.get("jobsUser")
    return await axios.get(`https://subb.aqaarfb.com${endPoint}ad/id/${id}`, {
        headers: { Authorization: token },
    });
};

export const getNumberOfAllApplicants = async () => {
    const token = cookie.get("jobsUser")
    return await axios.get(`https://subb.aqaarfb.com${endPoint}company`, {
        headers: { Authorization: token },
    });
};

export const createApplicant = async (data) => {
    const token = cookie.get("jobsUser")
    return await axios.post(`https://subb.aqaarfb.com${endPoint}`, data, {
        headers: { Authorization: token },
    });
};