
import axios from 'axios';


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

    axios.post('https://api.impin.fr/user/register', data)
        .then((res) => {
            localStorage.setItem('token', res.data.token);
            window.location.href = '/channels/@me';
        })
        .catch((err) => {
            setErrorMessage(err.response.data.message);
        });

};
