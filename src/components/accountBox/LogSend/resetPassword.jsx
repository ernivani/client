import axios from 'axios';

export const resetPasswordSend = (email, setErrorMessage) => {

    const data = {
        email: email
    };
    console.log(data);
    axios.post('/api/user/resetPassword', data)
        .then((res) => {
            console.log(res);
            alert("Un email vous a été envoyé pour réinitialiser votre mot de passe");
        })
        .catch((err) => {
            setErrorMessage(err.response.data.message);
        });
}
