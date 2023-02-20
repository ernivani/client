import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import './index.css';

const socket = io('http://213.32.89.28:5000');
const SideBar = () => {

  // get the value from the /channels/:channelId route
  const { channelId } = useParams();
  const { serverList, setServerList } = useState([]);
  const { username, setUsername } = useState('ernicani');



  return (
    <div className="sidebar">
        <SideBarIcon icon={<FaFire size="28" />} text="Messages Privé" />
        <Divider />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} text= "Server 1" />
        <SideBarIcon icon={<FaPoo size="20" />} text="Server 2" />
        <SideBarIcon icon={<BsPlus size="32" />} text="Créer un serveur" />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} text="Settings" />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡',active=false }) => (
  <div className="sidebar-icon">
    {active}
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
