import { Cookies } from 'react-cookie'
import { getall } from './wishlist';
const cookie = new Cookies()

export const loginfill = async () => {
    const wishobjects = await getall()
    console.log(wishobjects.data.response)
    const wishproducts = wishobjects.data.response?.map(a => a._id)
    cookie.set("favorites", wishproducts, { path: "/" });
}

export const getpersonal = () => {
    const wish = cookie.get("favorites")
    console.log(wish)
    return ({ wish: wish })
}

export const update = async () => {
    await loginfill()
    return getpersonal()
}