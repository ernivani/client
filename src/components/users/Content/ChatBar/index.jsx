import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';



const socket = io('http://213.32.89.28:5000');
const ChannelBar = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');

  const [showuser, setShowuser] = useState(false);


  useEffect(() => {

    // focus on the input field

    focusInput();

    // check in local storage for username
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    } else {
      // if no username, prompt user for one
      const username = prompt('Please enter your username');
      setUsername(username);
      localStorage.setItem('username', username);
    }



    socket.on('message', (message) => {
      message.timestamp = new Date(message.timestamp).addHours(parseInt(message.timestamp,10)).toISOString().slice(0, 19).replace('T', ' ');
      setMessages((prevMessages) => [...prevMessages, message]);
      setLoading(false);
    });

    socket.on('history', (history) => {
      history.forEach((message) => {
        message.timestamp = new Date(message.timestamp).addHours(2).toISOString().slice(0, 19).replace('T', ' ');
      });
      setMessages(history);
      setLoading(false);
    });

    socket.on('connect_error', (error) => {
      console.error(error);
      setLoading(true);
    });

    return () => {
      socket.off('message');
      socket.off('history');
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
      timestamp: now.toISOString().slice(0, 19).replace('T', ' '),
      username: username,
    };
    socket.emit('message', message);
    message.timestamp = new Date(message.timestamp).addHours(2).toISOString().slice(0, 19).replace('T', ' ');
    setMessages((prevMessages) => [...prevMessages, message]);
    setInputValue('');
    focusInput();
  };

  function focusInput() {
    document.getElementById('message-input').focus();
  }

  function handleUsernameChange() {
    const newUsername = prompt('Please enter your new username');
    setUsername(newUsername);
    localStorage.setItem('username', newUsername);
    focusInput();
  }

  function handleShowUser() {
    setShowuser(!showuser);

  }
  

  return (
    <div>
      <div className="messages">
        {loading ? (
          <div className="loading">Login in...</div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className="message">
              <div className="message-header">
                <strong className="username" onClick={handleShowUser}>{message.username}</strong>{' '}
                <span className="message-timestamp">{message.timestamp}</span>
              </div>
              <div className="message-text">{message.text}</div>
            </div>
          ))
        )}
        {showuser ? (
          <div className="showuser">
            <div className="showuser-header">
              <strong className="username">{username}</strong>{' '}
              <span className="message-timestamp">Null</span>
              </div>
              <div className="showuser-text">desc</div>
              </div>
        ) : (
          <div></div>
        )}
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
      <div className="settings">
        <button onClick={handleUsernameChange}>
          Change username
        </button>
      </div>
    </div>
  );
};

export default ChannelBar;