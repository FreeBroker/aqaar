import React from "react";
import { defColor } from "../../Constants/defaults";

export default function Message({ message, userID }) {
  console.log(message);
  return (
    <>
      {message.text && (
        <div
          style={{
            display: "flex",
            justifyContent:
              message.sender_id === userID ? "flex-end" : "flex-start",
          }}
        >
          <div
            style={{
              background: message.sender_id === userID ? "silver" : defColor,
              paddingTop: 3,
              paddingLeft: 7,
              paddingRight: 7,
              borderRadius: 12,
            }}
          >
            <h6
              style={{
                color: message.sender_id === userID ? "black" : "white",
              }}
            >
              {message.text}
            </h6>
          </div>
        </div>
      )}
    </>
  );
}
