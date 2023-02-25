import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Line } from 'react-chartjs-2';

import  checkAuth  from '../accountBox/checkAuth';

const socket = io.connect('http://213.32.89.28:5000');

export function Logs() {

    // get the current link
    const currentLink = window.location.pathname;
    // check if the user is authenticated
    checkAuth(currentLink);

    const [logs, setLogs] = useState([]);

    // get the token from local storage
    const token = localStorage.getItem('token');

    useEffect(() => {
        socket.emit('getLogs', token);

        
        socket.on('getLogsResponse', (data) => {
            setLogs(data.logs);
          socket.disconnect();
        });

    }, []);

  
      return (
        <div>
          <h1>Logs</h1>
          <ul>
          </ul>
          {logs.map((log, index) => {
            return (
              <div key={index}>
              <p>method: {log.method}</p>
              <p>responseTime: {log.responseTime}</p>
              <p>status: {log.status}</p>
              <p>timestamp: {log.timestamp}</p>
              <p>url: {log.url}</p>
            </div>
          );
        }
        )}
      </div>
    );
  }
  
