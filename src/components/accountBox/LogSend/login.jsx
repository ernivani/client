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
    const socket = io.connect('http://213.32.89.28:5000');
    socket.emit('login', data);
    socket.on('loginResponse', (data) => {
        // reponse du serveur : status et message
        if (data.status === 'success') {
            localStorage.setItem('token', data.token); // set the token in local storage
            window.location.href = '/channels/@me'; // redirect to the home page
          } else {
            //todo: afficher le message d'erreur dans le formulaire
            setErrorMessage(data.message);
            // close the socket
            socket.disconnect();
        }
    });

};