import React  from 'react';
import SideBar from './components/SideBar'; 
import Channelbar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';

import LogApp from './components/LogApp';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';

import { Route , Routes } from 'react-router-dom';


import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route exact path="/login" element={<Login />}></Route> 
      <Route path="/register" element={<Register />}></Route>
      <Route path="/App" element={<div>App</div>}></Route>
      <Route path="/channels" element={<div>channels</div>}></Route>
      <Route path="/channels/:channelId" element={<AfficherApp />}></Route>
      <Route path="*" element={<div>404</div>}></Route>
    </Routes>
  );
}

export default App;

function AfficherApp() {
  return (
      <SideBar />
  );
}

