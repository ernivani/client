import io from 'socket.io-client';

export function checkAuth(link) {
    const token = localStorage.getItem('token');


    
    if (token) {
      const socket = io.connect('http://213.32.89.28:5000');
      socket.emit('auth', token);
      socket.on('authResponse', (data) => {
        if (data.status === 'success') {
            console.log('user is authenticated');
            if (link === '/log') {
                window.location.href = '/channels/@me';
            }
            socket.disconnect();
        } else {
          // user is not authenticated
            if (link !== '/log') {
                window.location.href = '/log';
            }
            console.log(data.status);
            localStorage.removeItem('token');
            window.location.href = '/log'; // or show an error message
        }
      });
    } else {
        if (link !== '/log') {
            window.location.href = '/log';
        }
    }
  };
  