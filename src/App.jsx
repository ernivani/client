// import "./App.css";
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home';

import User from './components/User/User';

import Chat from './components/Chat/Chat';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                {/* create a path for user/id and id is a value */}
                <Route path="user/:id" element={<User />} />
                <Route path="chat" element={<Chat />} />
                <Route path="*" element={<div>ERROR 404 : Not Found</div>} />
            </Routes>
        </div>
    );
}

export default App;