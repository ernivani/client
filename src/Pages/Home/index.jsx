import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
        <div className="home-container">
            <h1>Home</h1>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/login">Login</Link></li>
                <li><Link to ="/register">Register</Link></li>
            </ul>
        </div>
        </div>
    );
}
