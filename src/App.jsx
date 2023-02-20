import React  from 'react';
import SideBar from './components/SideBar'; 
import Channelbar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';

import { Route , Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<AfficherApp />}></Route>
      <Route path="/channels/:channelId" element={<AfficherApp />}></Route>
      <Route path="*" element={<h1>404</h1>}></Route>
    </Routes>
  );
}

export default App;

function AfficherApp() {
  return (
    <div className="App">
      <SideBar />
    </div>
  );
}
