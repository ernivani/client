// socket 
import io from 'socket.io-client';


export const loginSend = (e,setErrorMessage) => {
    // fonction de login 
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    const data = {
        email: email,
        password: password
    };
    const socket = io.connect('https://api.impin.fr');
    socket.emit('login', data);
    socket.on('loginResponse', (data) => {
        if (data.status === 'success') {
            localStorage.setItem('token', data.token); // set the token in local storage
            localStorage.setItem('username', data.username); // set the username in local storage
            console.log(data.username);
            window.location.href = '/channels/@me'; // redirect to the home page
            socket.disconnect();
          } else {
            setErrorMessage(data.message);
            socket.disconnect();
        }
    });

};
