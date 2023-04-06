import io from 'socket.io-client';


export default function checkAuth(link) {
    const token = localStorage.getItem('token');

    if (token) {
      const socket = io.connect('wss://api.impin.fr');
      socket.emit('auth', token);
      socket.on('authResponse', (data) => {
        if (data.status == 'success') {
          // user is authenticated
            if (link === '/log') {
                window.location.href = '/channels/@me';
            }
            socket.disconnect();
        } else {
          window.location.href = '/log';
        }
      });
    } else {
        if (link != '/log') {
            window.location.href = '/log';
        }
    }
  };
  
