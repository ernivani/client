
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
            const userCache = {
                token: res.data.token,
                userId: res.data.uid,
                username: res.data.username
            };
            localStorage.setItem('userCache', JSON.stringify(userCache));
            window.location.href = '/channels/@me';
        })
        .catch((err) => {
            setErrorMessage(err.response.data.message);
        });

};
