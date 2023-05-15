import axios from 'axios';

export const resetPasswordSend = (email, setErrorMessage) => {

    const data = {
        email: email
    };
    axios.post('https://api.impin.fr/user/resetPassword', data)
        .then((res) => {
            alert("Un email vous a été envoyé pour réinitialiser votre mot de passe");
        })
        .catch((err) => {
            setErrorMessage(err.response.data.message);
        });
}
