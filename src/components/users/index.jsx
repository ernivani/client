import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {SideBar}  from "./sideBar";
import styled from 'styled-components';

import { checkAuth } from '../accountBox/checkAuth';

const FakeParent = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  --color-full-white: #fff;
  --color-dark: #2c2f33;
  --color-lighter-dark: #2f3136;
  --color-not-quite-black: #36393f;
  --color-actually-little-black: #2f3136;
  --color-blurple: #7289da;
  --color-yell-bubble: #d0b34e;
  --color-red-bubble: #ff5555;
  --color-green-bubble: #57f287;
`;



const socket = io.connect('http://213.32.89.28:5000');

export function Users() {

  checkAuth();

    // get the current link
    const currentLink = window.location.pathname;
    // check if the user is authenticated
    checkAuth(currentLink);

    const [servers, setServer] = useState([]);

    // get the token from local storage
    const token = localStorage.getItem('token');

    useEffect(() => {
        socket.emit('getServer', token);

        
        socket.on('getServerResponse', (data) => {
          setServer(data.server);
          socket.disconnect();
        });

    }, []);
    
  
    return (
      <FakeParent>
      <SideBar />
      </FakeParent>
    );
  }
  
