import axios from "axios";
import { Cookies } from "react-cookie";
const endPoint = `/login/`

const cookie = new Cookies();

export const loginjobs = async (email, password) => {
    const res = await axios.post(`https://subb.aqaarfb.com${endPoint}`, { email, password });
    console.log("Test", res.data.freelancer)
    if (res.data.token) {
        await cookie.set("jobsUser", "Bearer " + res.data.token, { path: "/" });
        if (res.data.freelancer) {
            await cookie.set("jobsAuth", "Freelancer", { path: "/" });
        } else {
            await cookie.set("jobsAuth", "Company", { path: "/" });
        }
        return { success: true, freelancer: res.data.freelancer, message: res.data.message };
    } else return { success: false, freelancer: res.data.freelancer, message: res.data.message };
};