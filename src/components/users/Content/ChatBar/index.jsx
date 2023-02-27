import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';



const socket = io('wss://api.impin.fr');
const ChannelBar = (messageList) => {
  
  const [messages, setMessages] = useState(messageList.messageList.messageList.a);
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('');

  const [showuser, setShowuser] = useState(false);



  useEffect(() => {

    // focus on the input field

    focusInput();

    // check in local storage for username
    setUsername( localStorage.getItem('username'));
    

    socket.on('message', (message) => {
      message.timestamp = new Date(message.timestamp).addHours(2).toISOString().slice(0, 19).replace('T', ' ');
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    console.log(messages);


    return () => {
      socket.off('message');
      socket.off('connect_error');
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }else if (e.keyCode === 13 && e.shiftKey) { 
        e.preventDefault();
        setInputValue(inputValue + "\n");
    }
  };
  
  Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
  }

  const sendMessage = () => {
    if (inputValue.trim() === '') {
      return;
    }
  
    const now = new Date();
    const message = {
      id: Date.now(),
      text: inputValue,
      timestamp: now.addHours(2).toISOString().slice(0, 19).replace('T', ' '),
      username: username,
    };
    console.log(message);
    socket.emit('message', message);
    setMessages((prevMessages) => [...prevMessages, message]);
    setInputValue('');
    focusInput();
  };

  function focusInput() {
    document.getElementById('message-input').focus();
  }

  function handleUsernameChange() {
    focusInput();
  }

  function handleShowUser() {
    setShowuser(!showuser);

  }
  

  return (
    <div>
      <div className="messages">
          {messages.map((message) => (
           <div key={message.id} className="message">
             <div className="message-header">
               <strong className="username" onClick={handleShowUser}>{message.username}</strong>{' '}
               <span className="message-timestamp">{message.timestamp}</span>
             </div>
             <div className="message-text">{message.text}</div>
           </div>
         ))
        }
      </div>
      <div className="input-container">
        <input
          type="text"
          id="message-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
      </div>
    </div>
  );
};

export default ChannelBar;