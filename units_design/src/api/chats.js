import axios from "axios";
import { Cookies } from "react-cookie";
import { proxy } from "../config";
const cookie = new Cookies(); //for the creation token

export const getbyid = async (id) => {
  ///can be used to refresh chat
  const token = cookie.get("user");
  return await axios.get(`${proxy}/chat/id/${id}`, {
    headers: { Authorization: token },
  });
  ////returns result
  ///result.data.response ===> chat
};
export const create = async ({ userId, unitId }) => {

  const token = cookie.get("user"); //user who initiates the chat
  return await axios.post(
    `${proxy}/chat/create`,
    {
      user_id: userId, //user to start the chat with,
      unit_id: unitId, ///unit related to the chat
    },
    { headers: { Authorization: token } }
  );
  ////returns result
  ///result.data.response ===>chat
};

export const sendmessage = async (formData) => {
  const token = cookie.get("user"); //message sender
  return await axios.put(`${proxy}/chat/send`, formData, {
    headers: { Authorization: token },
  });
  /* fromData= new formData()
       
        type ="voice" in case the message contains a voice
        media= file for voice message
        text ="some sent text"  
        id=chat._id


        returns result
        ///result.data.response === new message to add to the messages array
    */
};

export const getmychats = async () => {
  const token = cookie.get("user");
  return await axios.get(`${proxy}/chat/my_chats`, {
    headers: { Authorization: token },
  });
  ////returns result
  ///result.data.response ===> array carring all messages
};
