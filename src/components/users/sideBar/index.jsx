import { FaFire, FaPlus, FaSignOutAlt, FaServer } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import './index.css';


const socket = io.connect('http://213.32.89.28:5000');

export function SideBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [spanPositions, setSpanPositions] = useState([]);

  const handleScroll = (event) => {
    setScrollPosition(event.target.scrollTop);
  };

  const handleMouseEnter = (id, position) => {
    const newSpanPositions = [...spanPositions];
    newSpanPositions[id] = position + 5;
    setSpanPositions(newSpanPositions);
  };

  const disconnect = () => {
    const token = localStorage.getItem('token');
    if (token) {
      socket.emit('logout', token);
      localStorage.removeItem('token');
      socket.once('logoutResponse', (data) => {
        if (data.success) {
          console.log('User logged out successfully');
        } else {
          console.log('Failed to log out user');
        }
      });
    }
    window.location.href = '/log';
  };

  useEffect(() => {
    const cleanup = () => {
      socket.off('logoutResponse');
    };

    return cleanup;
  }, []);

  return (
    <div className="fakeParent" onScroll={handleScroll}>
      <div className="parent">
            <SideBarIcon
              icon={<FaFire />}
              text="Messages privé"
              active={false}
              onMouseEnter={(event) =>
                handleMouseEnter(0, event.currentTarget.getBoundingClientRect().top)
              }
              type="green-boi"
              id="@me"
              spanPositions={spanPositions}
            />
          <Divider />
          {[...Array(50)].map((e, i) => (
            <SideBarIcon
              key={i}
              id={i}
              icon={<FaServer />}
              text={`Serveur ${i}`}
              active={false}
              type="yell-boi"
              spanPositions={spanPositions}
            />
          ))}
          <Divider />
            <SideBarIcon
              icon={<FaPlus />}
              text="Créer un serveur"
              active={false}
              type="green-boi"
              onClick={() => {
                // todo: afficher la fenêtre de création de serveur
                alert('todo: afficher la fenêtre de création de serveur');
              }}
              onMouseEnter={(event) =>
                handleMouseEnter(0, event.currentTarget.getBoundingClientRect().top)
              }
              spanPositions={spanPositions}
            />
            <SideBarIcon
              icon={<FaSignOutAlt />}
              text="Déconnexion"
              active={false}
              type="red-boi"
              onClick={disconnect}
              onMouseEnter={(event) =>
                handleMouseEnter(0, event.currentTarget.getBoundingClientRect().top)
              }
            />
      </div>
    </div>
  );
}

function SideBarIcon(props) {
  const { icon, text, active, onClick, onMouseEnter, type, path, id, spanPositions } = props;
  const clstype = 'squircle ' + type;
  const [hoverPosition, setHoverPosition] = useState(null);
  let pathModif = '/channels/' + id;
  let pos;
  if (spanPositions === undefined) {
    pos = 300;
  } else {
    pos = spanPositions[id];
  }
  const handleMouseEnter = (event) => {
    setHoverPosition(event.currentTarget.getBoundingClientRect().top + 10);
  };
  const handleMouseLeave = () => {
    setHoverPosition(null);
  };
  return (
    <div className="serv">
      {hoverPosition && (
        <span className="enfant" style={{ top: hoverPosition, height: 'fit-content' }}>
          {text}
        </span>
      )}
      <Link
        className={clstype}
        onClick={onClick}
        onMouseEnter={(event) => {
          handleMouseEnter(event);
        }}
        onMouseLeave={handleMouseLeave}
        to={pathModif}
      >
        {icon ? icon : text[0]}
      </Link>
    </div>
  );
}


const Divider = () => <hr className="sidebar-hr" />;

