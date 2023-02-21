import { FaFire, FaPlus, FaSignOutAlt,FaServer } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import { connectSocket } from '../../assets/sockets.js';

import './loading.css'

import './index.css';

import './discord.css';

const SideBar = () => {
  const { socket, getServerList, createServer } = connectSocket();

  const { channelId } = useParams();
  const [serverList, setServerList] = useState([]);

  const [loading, setLoading] = useState(true);



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
      setServerList(data.serverList);
      setLoading(false);

    });

    return ()  => {
      socket.off('getServer');

    }
  }, []);


 

  useEffect(() => {
    getServerList(token);
  }, []);

  //   create server handler
  const handleCreateServer = () => {
    const serverName = prompt('Entrez le nom du serveur');
    if (serverName) {
        let prompt = {name: serverName, token: token};
        createServer(prompt);
        console.log("server created");
        // actualiser la liste des serveurs
        getServerList(token);
        console.log(serverList);

    }
  };


  while (loading) {
    return (
      <div className='loading'>
      <svg width="200" height="200" viewBox="0 0 100 100" className="loading">
        <polyline className="line-cornered stroke-still" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
        <polyline className="line-cornered stroke-still" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
        <polyline className="line-cornered stroke-animation" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
        <polyline className="line-cornered stroke-animation" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
      </svg>
    </div>
    );
  }

  if (channelId == "Logout") {

    Cookies.remove('SESS');
    window.location.href = '/login';
  }

  return (
    
    <nav>
      <ul className="guilds-container">
        <SideBarIcon icon={<FaFire size="28" />} text="Messages Privé" active={channelId == '@me'} id="@me" />
        <Divider />
        {serverList.map((server) => (
          <SideBarIcon key={server.id} icon={<FaServer size="28" />} text={server.name} active={server.id == channelId} id={server.id} />
        ))}
        <Divider />
        <SideBarIcon icon={<FaPlus size="28" />} text="Messages Privé" onClick={handleCreateServer} />
        <SideBarIcon icon={<FaSignOutAlt size="22" />} text="Logout" id="Logout" />

      </ul>
    </nav>
    );
  }


function SideBarIcon({ icon, text = 'tooltip 💡', active = false, id = null, onClick = null }) {


  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (active) {
    return (
      <li className="squircle purple-boi">
        {icon ? icon : text[0]}
        <div className="popper-boi">
          <h4 className="popper-text">{text}</h4>
        </div>
      </li>
    );
  }

  if (id == null ) {
    return (
      <li className="squircle purple-boi" onClick={handleClick}>
        {icon ? icon : text[0]}
        <div className="popper-boi">
          <h4 className="popper-text">{text}</h4>
        </div>
      </li>
    );
    }

  return (
    <Link to={`/channels/${id}`}>
      <li className="squircle purple-boi" onClick={handleClick}>
        {icon ? icon : text[0]}
        <div className="popper-boi">
          <h4 className="popper-text">{text}</h4>
        </div>
      </li>
    </Link>
  );

}



const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;