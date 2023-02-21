import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import {connectSocket } from '../../assets/sockets.js';


export default function Register () 
{
    const {socket, register} = connectSocket();

    const [infoRegister, setInfoRegister] = React.useState("");

    if (localStorage.getItem('token')) {
        window.location.href = "/channels/@me";
    }
    

    useEffect(() => {
        socket.on('register', (data) => {
            setInfoRegister(data.message);
            if (data.status != "error") {
                // save token in local storage
                localStorage.setItem('token', data.token);
                // redirect to home page
            }
            else {
                console.log("error");
            }
        });
    }, [socket]);

    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name === "email") {
            setEmail(value);
        } else if(name === "username") {
            setUsername(value);
        } else if(name === "password") {
            setPassword(value);
        } else if(name === "confirmPassword") {
            setConfirmPassword(value);
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password != confirmPassword) {
            setInfoRegister("Passwords do not match");
            return;
        }
        register({email: email, username: username, password: password})
        setPassword("");
        setConfirmPassword("");
    }



    return (
        <div className="register">
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/login">Login</Link></li>
                <li><Link to ="/register">Register</Link></li>
            </ul>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={handleChange} />
                </label>
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={handleChange} />
                </label>
                <label>
                    Confirm Password:
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>{infoRegister}</div>
        
        </div>
    );
}
