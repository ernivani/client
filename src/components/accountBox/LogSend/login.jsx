import axios from 'axios';

export const loginSend = (e, setErrorMessage) => {
    const email = e.target.email.value;
    const password = e.target.password.value;

    const data = {
        email: email,
        password: password
    };
    console.log(data);
    axios.post('https://api.impin.fr/user/login', data)
        .then((res) => {
            console.log(res);
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
