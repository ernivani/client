import TopNavigation from '../TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';


const socket = io('http://213.32.89.28:5000');
const ContentContainer = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

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
      message.timestamp = new Date(message.timestamp)
        .addHours(parseInt(message.timestamp, 10))
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ');
      setMessages((prevMessages) => [...prevMessages, message]);
      setLoading(false);
    });

    socket.on('history', (history) => {
      history.forEach((message) => {
        message.timestamp = new Date(message.timestamp)
          .addHours(2)
          .toISOString()
          .slice(0, 19)
          .replace('T', ' ');
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

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000);
    return this;
  };

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
    message.timestamp = new Date(message.timestamp)
      .addHours(2)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    setMessages((prevMessages) => [...prevMessages, message]);
    setInputValue('');
    focusInput();
  };

  function focusInput() {
    document.querySelector('.bottom-bar-input').focus();
  }

  
  if (loading) {
    return (
      <div className='content-container'>
        <TopNavigation />
        <div className='content-list'>
          <div className='content-list'>
            <div className='post'>
              <div className='avatar-wrapper'>
                <img
                  src='https://avatars.dicebear.com/api/open-peeps/seed.svg'
                  alt=''
                  className='avatar'
                />
              </div>
              
              <div className='post-content'>
                <p className='post-owner'>
                  Loading...
                  <small className='timestamp'></small>
                </p>
                <p className='post-text'></p>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-bar'>
          <PlusIcon />
          <input
            type='text'
            placeholder='Type a message'
            className='bottom-bar-input'
            onKeyDown={handleKeyDown}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
    );
    
              
  }
  return (
    

    <div className='content-container'>
      <TopNavigation />
      <div className='content-list'>
        <div className='content-list'>
          {messages.map((message) => (
            <Post
              key={message.id}
              name={message.username}
              timestamp={message.timestamp}
              text={message.text}
            />
          ))}
        </div>

      </div>
    <div className='bottom-bar'>
      <PlusIcon />
      <input type='text' placeholder='Type a message' className='bottom-bar-input' onKeyDown={handleKeyDown} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </div>
  </div>
  );
};



const Post = ({ name, timestamp, text }) => {

  const seed = name;
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default ContentContainer;
