import { Link } from "react-router-dom";

import './index.css';

export default function Home() {
    return (
        <div className="home">
        <div className="home-container">
            <h1>Home</h1>
            <ul>
                <li className="home"><Link to ="/">Home</Link></li>
                <li><Link to ="/login" className="Home">Login</Link></li>
            </ul>
        </div>
        </div>
    );
}
