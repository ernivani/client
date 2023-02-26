import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="/log" state={"signin"}>Login</Link>
                </li>
                <li>
                    <Link to="/log" state={"signup"}>Register</Link>
                </li>
            </ul>
        </div>
    );
}