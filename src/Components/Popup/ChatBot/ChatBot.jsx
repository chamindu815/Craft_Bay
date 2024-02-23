import React, { useState } from "react";
import "./ChatBot.css";
import { BsXLg } from "react-icons/bs";

const ChatBot = ({ onCancel }) => {
  const cancelPopup = () => {
    console.log("cancelPopup");
    onCancel();
  };
  return (
    <div>
      <div className="chat-bot-bg">
        <iframe
          className="chat-bot"
          width="350"
          height="430"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/ade5040b-75fd-48fb-a25b-0b984449f25d"
        ></iframe>
        <div className="chat-bot-close">
          <BsXLg className="chat-bot-close-btn" onClick={() => onCancel()} />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
