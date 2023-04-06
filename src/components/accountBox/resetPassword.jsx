import axios from 'axios'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ResetPassword() {

    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setErrorMessage] = useState(null);

    const resetPasswordSend = (e) => {
        e.preventDefault();
        const token = e.target.token.value;
        const data = {
            password: password,
            password2: password2,
            token: token
        };

        axios.post('https://api.impin.fr/user/reset', data)
            .then((res) => {
                setErrorMessage(res.data.message);
            })
            .catch((err) => {
                setErrorMessage(err.response.data.message);
            });
    }


    return (
        <div>
            <h1>Reset Password</h1>
            <form onSubmit={resetPasswordSend}>
                <input type="password" name="new-password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required autoComplete="off" />
                <input type="password" name="new-password-confirm" placeholder="Confirm Password" onChange={(e) => setPassword2(e.target.value)} value={password2} required autoComplete="off" />
                <input type="hidden" name="token" value={window.location.href.split("/")[4]} />
                <button type="submit">Reset Password</button>
            </form>
            {error && <p>{error}</p>}
            <Link to="/log" style={{ textDecoration: 'none', color: 'grey'
        }}>Back to login</Link>
        </div>
    )
}