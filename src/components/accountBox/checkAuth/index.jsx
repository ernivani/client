import io from 'socket.io-client';


export default function checkAuth(navigate, link) {
    const token = localStorage.getItem('token');


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
            window.location.href = '/log';
        }
    }
  };
  