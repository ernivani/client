import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import Cookies from 'js-cookie';

import SignInForm from './SignInForm/';
import SignUpForm from './SignUpForm/';

import './index.css';


function Login ( props )
{
    const [signUpModal, setSignUpModal] = React.useState(props.signup);
    const [signInModal, setSignInModal] = React.useState(props.signin);

    const handleModal = (e) => {
        if (e.target.id === "register") {
            setSignUpModal(true);
            setSignInModal(false);
        }
        else if (e.target.id === "login") {
            setSignUpModal(false);
            setSignInModal(true);
        }
    };
    
    if (Cookies.get('SESS')) {
        console.log("already logged in");
        window.location.href = "/channels/@me";
    }else {
        console.log("not logged in");
    }

    return (
        <div className='connection-form'>
            <div className='form-container'>
                <ul>
                    <li onClick={handleModal} id="register" className={signUpModal ? "active b" : "b"}>S'inscrire</li>
                    <li onClick={handleModal} id="login" className={signInModal ? "active b" : "b" }>Se connecter</li>
                </ul>
                {signUpModal && <SignInForm />}
                {signInModal && <SignInForm />}
            </div>

            mail : z@z.com <br></br>
            mdp : z
        </div>
    )


}


export default Login;