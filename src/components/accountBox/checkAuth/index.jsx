import io from 'socket.io-client';

export const checkAuth = () => {
    const token = localStorage.getItem('token');
    
    
    if (token) {
        
      const socket = io.connect('http://213.32.89.28:5000');
      socket.emit('auth', token);
      socket.on('authResponse', (data) => {
        console.log("data");
        if (data.status === 'success') {
            console.log('user is authenticated');
            socket.disconnect();
        } else {
          // user is not authenticated
            console.log(data.status);
            localStorage.removeItem('token');
            window.location.href = '/log'; // or show an error message
        }
      });
    } else {
      window.location.href = '/log'; // or show an error message
    }
  };
  