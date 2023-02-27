
import io from 'socket.io-client';

export const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/log';
    const socket = io.connect('https://api.impin.fr');
    socket.emit('logout', localStorage.getItem('token'));
};
