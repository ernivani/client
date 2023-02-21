import io from 'socket.io-client';

const socket = io('http://213.32.89.28:5000');

export const connectSocket = () => {
    socket.on('connect', () => {
      console.log('Connected to socket.io server');
    });
    socket.on('disconnect', () => {
        console.log('Disconnected from socket.io server');
    });



    const login = (user) => {
        socket.emit('login', user);
    };

    const register = (user) => {
        socket.emit('register', user);
    };

    const sendMessage = (message) => {
        socket.emit('message', message);
    };

    const getHistory = () => {
        socket.emit('history');
    };

    const getServerList = (server) => {
        socket.emit('getServer',server);
    };

    const createServer = (server) => {
        socket.emit('createServer',server);
    };


  return { socket, login, sendMessage, getHistory, getServerList, register };
};

