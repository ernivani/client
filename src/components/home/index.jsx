import React from 'react';

import { Link } from 'react-router-dom';


export function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/log">Login</Link>
        </div>
    );

}