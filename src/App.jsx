import React  from 'react';
import SideBar from './components/SideBar'; 
import Channelbar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';


function App() {
  return (
    <div className="flex">
      <SideBar />
      <Channelbar />
      <ContentContainer />
    </div>
  );
}

export default App;
