import { Link } from 'react-router-dom'

export function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/log" state={"signin"}>Login</Link>
            <br></br>
            <Link to="/log" state={"signup"}>Register </Link>

        </div>
    )
}
