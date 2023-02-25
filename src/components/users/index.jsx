import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {SideBar}  from "./sideBar";


import { checkAuth } from '../accountBox/checkAuth';

const socket = io.connect('http://213.32.89.28:5000');

export function Users() {

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
        <SideBar />
    );
  }
  
