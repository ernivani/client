import { FaFire, FaPlus, FaSignOutAlt, FaServer } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './index.css';

export function SideBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [spanPositions, setSpanPositions] = useState([]);

  const handleScroll = (event) => {
    setScrollPosition(event.target.scrollTop);
  };

  const handleMouseEnter = (id, position) => {
    const newSpanPositions = [...spanPositions];
    newSpanPositions[id] = position  + 5;
    setSpanPositions(newSpanPositions);
  };

  useEffect(() => {
    // Initialize the spanPositions array with default values
    setSpanPositions([...Array(100)].map(() => '300px'));
    }, []);
  return (
    <div className="fakeParent" onScroll={handleScroll}>
      <div className="parent">
        <div>
          <span className="enfant">Messages privé</span>
          <SideBarIcon
            icon={<FaFire />}
            text="Messages privé"
            active={false}
            onMouseEnter={(event) =>
              handleMouseEnter(0, event.currentTarget.getBoundingClientRect().top)
            }
            type="green-boi"
            id="@me"
          />
        </div>
        <Divider />
        {[...Array(50)].map((e, i) => (
          <div className='serv' key={i} onMouseEnter={(e) =>handleMouseEnter(i, e.currentTarget.getBoundingClientRect().top)}>
            <span
              className="enfant"
              style={{ top: spanPositions[i], height: '30px' }}
            >
              Serveur {i}
            </span>
            <SideBarIcon
              id={i}
              icon={<FaServer />}
              text="Serveur"
              active={false}
              type="yell-boi"
            />
          </div>
        ))}
        <Divider />
        <div>
          <span className="enfant">Créer un serveur</span>
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
          />
        </div>
        <div>
          <span className="enfant">Déconnexion</span>
          <SideBarIcon
            icon={<FaSignOutAlt />}
            text="Déconnexion"
            active={false}
            type="red-boi"
            onClick={() => {
              // todo: afficher la fenêtre de création de serveur
              //
              localStorage.removeItem('token');
              window.location.href = '/';
            }}
            onMouseEnter={(event) =>
              handleMouseEnter(0, event.currentTarget.getBoundingClientRect().top)
            }
          />
        </div>  
      </div>
    </div>
  );
}

function SideBarIcon(props) {
  const { icon, text, active, onClick, onMouseEnter, type, path,id} = props;
  const clstype = 'squircle ' + type;
  const pathModif = "/channels/" + id; 
  console.log(pathModif);
  return (
    <Link 
    className={clstype} 
    onClick={onClick} 
    onMouseEnter={onMouseEnter}
    to={pathModif}
    >
      {icon ? icon : text[0]}
    </Link>
  );
}

const Divider = () => <hr className="sidebar-hr" />;
