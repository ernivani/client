import io from 'socket.io-client';


export default function checkAuth(link) {
    const token = localStorage.getItem('token');

    if (token) {
      const socket = io.connect('http://213.32.89.28:5000');
      socket.emit('auth', token);
      socket.on('authResponse', (data) => {
        if (data.status == 'success') {
          // user is authenticated
            if (link === '/log') {
                window.location.href = '/channels/@me';
            }
            socket.disconnect();
        } else {
          // user is not authenticated
            if (link === '/log') {
                window.location.href = '/channels/@me';
            }else {
                window.location.href = '/log';
            }
        }
      });
    } else {
        if (link != '/log') {
            window.location.href = '/log';
        }
    }
  };
  
