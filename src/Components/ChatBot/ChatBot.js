import React, { Component } from "react";

export class ChatBot extends Component {
  render() {
    return (
      <div>
        <h1>This is Our ChatBot</h1>
        <div>
          <iframe
            width="350"
            height="430"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/ade5040b-75fd-48fb-a25b-0b984449f25d"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default ChatBot;
