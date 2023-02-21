import { BsPlus, BsFillLightningFill, BsGearFill, BsPower } from 'react-icons/bs';
import { FaFire, FaPlus, FaSignOutAlt,FaServer } from 'react-icons/fa';
import {RiDoorClosedLine} from 'react-icons/ri';
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import { connectSocket } from '../../assets/sockets.js';

import './index.css';

const SideBar = () => {
  const { socket, getServerList } = connectSocket();

  const { channelId } = useParams();
  const [serverList, setServerList] = useState([]);

  // verify if the user is connected by checking if the cookie is SESS is set or not
  const token = Cookies.get('SESS');
  if (!token) {
    window.location.href = '/login';
  }

  useEffect(() => {
    socket.on('getServer', (data) => {
      if (data.status == 'error') {
        Cookies.remove('SESS');
        window.location.href = '/login';
      }
      const server = { id: data.id, name: data.name };
      setServerList(data.list);
    });
  }, []);

  useEffect(() => {
    getServerList(token);
  }, []);

  //   create server handler
  const createServer = () => {
    const serverName = prompt('Entrez le nom du serveur');
    if (serverName) {
        socket.emit('createServer', { name: serverName, token:token });
        getServerList(token);

    }
  };


  if (channelId == "Logout") {
    Cookies.remove('SESS');
    window.location.href = '/login';
    }

    return (
      <div className="sidebar">
        <SideBarIcon
          icon={<FaFire size="28" />}
          text="Messages Privé"
          active={channelId == '@me'}
          id="@me"
        />
        <Divider />
        {serverList.map((server) => (
          <SideBarIcon
            key={server.id}
            icon={<FaServer size="28" />}
            text={server.name}
            active={server.id == channelId}
            id={server.id}
          />
        ))}
        <Divider />
        <SideBarIcon icon={<FaPlus size="32" />} text="Créer un serveur" onClick={createServer} />
        <SideBarIcon icon={<FaSignOutAlt size="22" />} text="Logout" id="Logout" />
      </div>
    );
    
  
  
};



function SideBarIcon({ icon, text = 'tooltip 💡', active = false, id = null, onClick = null }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (active) {
    return (
      <div className="sidebar-icon-active">
        <div className="sidebar-icon" onClick={handleClick}>
          {icon}
          <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
        </div>
      </div>
    );
  }

  if (id == null ) {
    return (
        <div className="sidebar-icon" onClick={handleClick}>{icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
        </div>
    );
    }

  return (
    <Link to={id ? `/channels/${id}` : '/'} onClick={handleClick}>
      <div className="sidebar-icon">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    </Link>
  );
}



const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;