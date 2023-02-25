import io from 'socket.io-client';

import { useNavigate } from 'react-router-dom';

export function checkAuth(link) {
    const token = localStorage.getItem('token');

    const navigate = useNavigate();

    
    if (token) {
      const socket = io.connect('http://213.32.89.28:5000');
      socket.emit('auth', token);
      socket.on('authResponse', (data) => {
        if (data.status === 'success') {
            if (link === '/log') {
                navigate('/channels/@me');
            }
            socket.disconnect();
        } else {
          // user is not authenticated
            if (link !== '/log') {
                navigate('/log');
                socket.disconnect();
            }
            console.log(data.status);
            localStorage.removeItem('token');
            navigate('/log');
            socket.disconnect();
        }
      });
    } else {
        if (link !== '/log') {
            navigate('/log');
        }
    }
  };
  