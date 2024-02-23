import React, {useState} from 'react'
import { BsChat } from "react-icons/bs";
import "./ChatBotFloatIcon.css";
import ChatBot from '../Popup/ChatBot/ChatBot';

const ChatBotFloatIcon = () => {
  const [chatBotOpen, setChatBotOpen] = useState(0);

  const handleCancelPopup = () => {
    setChatBotOpen(0);
  };  

  const handleChatBot = () => {
    setChatBotOpen()
  };

  return (
    <div>
      {chatBotOpen !== 0 && (
            <ChatBot
              onOpen={handleChatBot}
              onCancel={handleCancelPopup}
            />
          )}
      <button className="chatbot-toggle">
            <BsChat className="chatbot-toggle-btn"
            onClick={() => handleChatBot()}/>
          </button>
    </div>
  )
}

export default ChatBotFloatIcon