import React, {useState} from "react";
import Cookies from 'js-cookie';

import {connectSocket } from '../../../assets/sockets.js';

const SignInForm = () => {

    const {socket, login} = connectSocket();
    const [error, setError] = useState("");


    

    useState(() => {
        socket.on('login', (data) => {
            setError(data.message);
            if (data.status != "error") {
                console.log(data);
                Cookies.set('SESS', data.token , { expires: 7 } );
                console.log(Cookies.get('SESS'));
                window.location.href = "/channels/@me";
            }
            else {
                console.log("error");
            }
        });
    }, [socket]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        login({email: email, password: password})
        setPassword("");

    }

    return (
        <form onSubmit={handleLogin} id="sign-up-form">
            <label htmlFor="email">Email</label><br/>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <label htmlFor="password">Mot de passe</label><br/>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <input type="submit" value="Se connecter"/>
            {error && <p>{error}</p>}
        </form>
    )

}

export default SignInForm;
