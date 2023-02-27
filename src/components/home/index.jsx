import {Link} from 'react-router-dom';


function Home() {
	
	return (
		<>
			<h1>Home</h1>
			<p>Home page</p>
			<Link to='/log' state={'signin'}>Log in</Link>
			<Link to='/log'state={'signup'}>Sign up</Link>
		</>
	)
}

export default Home