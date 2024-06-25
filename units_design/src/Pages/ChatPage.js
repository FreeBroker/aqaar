import React, { useEffect, useState } from "react";
import SearchBar from "../Components/Dashboard/SearchBar";
import { columns, headSide } from "fontawesome";
import { defColor } from "../Constants/defaults";
import MessageForm from "../Components/ChatPage/MessageForm";
import MessageList from "../Components/ChatPage/MessageList";
import { getmychats, sendmessage, create } from "../api/chats";
import { getprofileapi } from "../api/user";
import { useLocation } from "react-router-dom";

export default function ChatPage() {

  const location = useLocation();

  let userId = location?.state?.userId;

  let unitId = location?.state?.unitId;

  const [messages, setMessages] = useState([
    { me: true, author: null, body: "مرحبا" },
    { me: true, author: null, body: "هذا البيت للبيع" },
    { me: true, author: null, body: "مرحبا مرة اخرى" },
  ]);
  const [activeChat, setActiveChat] = useState(0);

  const [myChats, setMyChats] = useState([]);
  const [chatId, setChatId] = useState("");
  const [currentID, setCurrentID] = useState("");
  const [newMessage, setNewMessage] = useState(false)

  let loading = true;
  useEffect(() => {
    if (loading) {
      create({ userId, unitId }).then(response => {
        if (response.data.message === "This chat is existing before") {
          getmychats().then((result) => setMyChats(result.data.myChats));
          getprofileapi().then((result) => setCurrentID(result.response._id));
          setChatId(response.data.chat_id)
        } else if (response.data.status === true) {
          setChatId(response.data.response._id)
          let formData = new FormData();
          formData.append("type", "");
          formData.append("media", "");
          formData.append("text", unitId);
          formData.append("id", response.data.response._id);

          sendmessage(formData).then((result) => {
            getmychats().then((result) => setMyChats(result.data.myChats));
            getprofileapi().then((result) => setCurrentID(result.response._id));
          });
        }
      })
      loading = false
    }
  }, []);

  console.log(myChats);
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSearchPress = () => {
    console.log(searchValue);
  };

  const handleNewMessage = (text) => {
    setMessages([...messages, { me: true, author: "Me", body: text }]);
    let formData = new FormData();
    formData.append("type", "");
    formData.append("media", "");
    formData.append("text", text);
    formData.append("id", chatId);

    sendmessage(formData).then((result) => setNewMessage(true));
  };
  if (!myChats) return <h1>Loading</h1>;
  return (
    <div className="profileWidth">
      <div className="border rounded m-3 p-3 bg-light">
        <div className="row">
          <div className="col-lg-5 col-md-12 border border-dark shadow rounded mx-3 p-3 bg-white">
            <h5>All Chats</h5>
            <div className="m-3 w-100">
              <SearchBar
                value={searchValue}
                onChange={handleSearchChange}
                onSearch={onSearchPress}
              />
            </div>
            <div className="overflow-auto" style={{ height: "450px" }}>
              {myChats?.map((item, index) => (
                <div
                  key={index}
                  className="row mx-1 border mouseHover my-1 rounded align-items-center p-2"
                  style={{ background: item.chat_id === chatId ? "silver" : "" }}
                  onClick={() => setChatId(item.chat_id)}
                >
                  <div
                    className="rounded-circle"
                    style={{ width: 50, height: 50 }}
                  >
                    <img
                      src="https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png"
                      alt="Logo"
                      className="h-100 w-100 rounded-circle "
                    />
                  </div>
                  <h6 className="mx-3">{item.user_name}</h6>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 border border-dark shadow rounded mx-3 p-3 shadow bg-white"
            style={{ height: 600 }}
          >
            <div
              className="row align-items-center mx-1"
              style={{ height: "10%" }}
            >
              <div className="rounded-circle" style={{ width: 50, height: 50 }}>
                <img
                  src="https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png"
                  alt="Logo"
                  className="h-100 w-100 rounded-circle "
                />
              </div>
              <h4 className="mx-3">{myChats?.find(chat => chat.chat_id === chatId)?.user_name}</h4>
            </div>
            <hr />
            <div className="chatContainer">
              <MessageList
                chatID={chatId}
                userID={currentID}
                newMessage={newMessage}
                setNewMessage={setNewMessage}
              />
              <MessageForm onMessageSend={handleNewMessage} />
            </div>
            {/* <div
              style={{
                borderTop: "1px solid #ccc",
                borderRadius: "0 0 3px 3px",
                boxSizing: "border-box",
                flex: "0 0 30px",
              }}
            >
              <div
                className=" bg-light"
                style={{
                  flex: 1,
                  margin: "1px",
                  //  border: "solid",
                }}
              >
                <input
                  type="text"
                  className="form-control col-11 bg-light rounded"
                  placeholder="Enter Your Message..."
                  name="maxArea"
                  value={chatText}
                  onChange={handleChatTextChange}

                  //  style={{ bottom: 0, position: "sticky" }}
                />
                <div className="d-flex align-items-center justify-content-center p-2 mouseHover bg-white ml-1 ">
                  <i
                    className="fa-solid fa-paper-plane fa-xl"
                    style={{ color: defColor }}
                  ></i>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
