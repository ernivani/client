
import axios from 'axios';


export const registerSend = (email,password,username,setErrorEmail, setErrorUsername, setErrorPassword) => {
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
            setErrorEmail(err.response.data.message);
            setErrorUsername(err.response.data.message);
            setErrorPassword(err.response.data.message);
        });

};
