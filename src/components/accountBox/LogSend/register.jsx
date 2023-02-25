
import io from 'socket.io-client';

export const registerSend = (e,setErrorMessage) => {
    // fonction de register 
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.username.value;
    const data = {
        email: email,
        password: password,
        username: username
    };
    const socket = io.connect('http://213.32.89.28:5000');
    socket.emit('register', data);
    socket.on('registerResponse', (data) => {
        // reponse du serveur : status et message
        if (data.status === 'success') {
            localStorage.setItem('token', data.token); // set the token in local storage
            window.location.href = '/channels/@me'; // redirect to the home page
            // close the socket
            socket.disconnect();
          } else {
            setErrorMessage(data.message);
            // close the socket
            socket.disconnect();
        }
    });


};
