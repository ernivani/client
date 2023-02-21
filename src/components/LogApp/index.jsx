import React  from 'react';

import "./index.css";

export default function LogApp() {
    return (
        <div className="login">
        <div className="login-container">
            <h1>Se connecter</h1>
            <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Mot de passe" />
            <button type="submit">Se connecter</button>
            </form>
            <a href="/register">Créer un compte</a>
        </div>
        </div>
    );
}
