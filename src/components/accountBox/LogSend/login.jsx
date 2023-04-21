import axios from 'axios';

export const loginSend = (email,password, setErrorEmail, setErrorPassword) => {

    const data = {
        email: email,
        password: password
    };
    
    console.log(data);
    axios.post('/api/user/login', data)
        .then((res) => {
            const userCache = {
                token: res.data.token,
                userId: res.data.uid,
                username: res.data.username
            };

            const emailCache = {
                email: email
            };
            localStorage.setItem('emailCache', JSON.stringify(emailCache));
            localStorage.setItem('userCache', JSON.stringify(userCache));
            window.location.href = '/channels/@me';
        })
        .catch((err) => {
            setErrorEmail(err.response.data.message);
            setErrorPassword(err.response.data.message);
        });
};
