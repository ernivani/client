import axios from 'axios';

export const loginSend = (email,password, setErrorEmail, setErrorPassword) => {

    const data = {
        email: email,
        password: password
    };
    
    console.log(data);
    axios.post('https://api.impin.fr/user/login', data)
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
            setErrorPassword(err.response.data.message);
        });
};
