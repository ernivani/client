
import io from 'socket.io-client';

export const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/log';
    const socket = io.connect('http://213.32.89.28:5000');
    socket.emit('logout');
    
    socket.disconnect();
};
