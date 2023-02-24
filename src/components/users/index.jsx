import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

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
        });

        return () => {
            socket.off('getServerResponse');
        };

    }, []);
    
  
    return (
      <div>
        <button onClick={(e) => {
          import ("../../assets/logout").then(module => {
            (module.logout(e));
          }).catch(error => {
            alert(error);
          });
        }}>Logout</button>
        <div>Server list </div>
        {servers.length > 0 ? (
          <ul>
            {servers.map((server) => (
              <li key={server.id}>{server.server_name}</li>
            ))}
          </ul>
        ) : (
          <div>No servers found</div>
        )}
      </div>
    );
  }
  
