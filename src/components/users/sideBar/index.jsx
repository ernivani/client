import { FaFire, FaPlus, FaSignOutAlt, FaServer } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { createRoot } from 'react-dom/client';

import  {FakeParent, Parent, Serv, Enfant, Squircle, Divider } from './css';


export default function SideBar(props) {
  const [spanPositions, setSpanPositions] = useState(undefined);
  const { serverList } = props;

  const { id } = useParams();


  const disconnect = (e) => {
    // todo: handle disconnection
    console.log(e)
    console.log('todo: handle disconnection');
  };

  const addServer = (e) => {
    // todo : handle add server
    console.log(e)
    console.log('todo : handle add server');
    const serverName = prompt('Nom du serveur :');
    if (serverName) {
      console.log(serverName);
    }
  };

  return (
    <FakeParent>
      <Parent>
        <SideBarIcon
          id="@me"
          icon={<FaFire />}
          text="Messages privé"
          active={id === "@me"}
          hoverColor={"var(--color-blurple)"}
          spanPositions={spanPositions}

          
        />
        <Divider />
        {serverList.map((e) => (
          <SideBarIcon
            key={e.id}
            id={e.id}
            icon={<FaServer />}
            text={e.server_name}
            active={id == e.id}
            hoverColor={"var(--color-yell-bubble)"}
            spanPositions={spanPositions}
          />
        ))}
        <SideBarIcon
          id="addServer"
          icon={<FaPlus />}
          text="Créer un serveur"
          active={0}
          hoverColor={"var(--color-green-bubble)"}
          onClick={addServer}
          spanPositions={spanPositions}
        />
        <SideBarIcon
          id="disconnect"
          icon={<FaSignOutAlt />}
          text="Déconnexion"
          active={0}
          hoverColor={"var(--color-red-bubble)"}
          onClick={disconnect}
        />
      </Parent>
    </FakeParent>
  );
}

function SideBarIcon(props) {
  const { icon, text, active, onClick, onMouseEnter, hoverColor, id } = props;
  const [hoverPosition, setHoverPosition] = useState(null);

  let pathModif = '';
  if (id === 'addServer' || id === 'disconnect') {
    pathModif = '#';
  } else {
    pathModif = '/channels/' + id;
  }
 
  
  const handleMouseEnterInternal = (event) => {
    const pos = event.currentTarget.getBoundingClientRect().top + 5;
    const enfant = <Enfant style={{ top: `${pos}px`, height: 'fit-content' }}>{text}</Enfant>;
    const container = document.createElement('div');
    container.setAttribute('id', 'popup');
    document.querySelector('.user').appendChild(container);
    createRoot(container).render(enfant);
    
  };
  
  

  const handleMouseLeave = () => {
    const div = document.getElementById('popup');
    if (div) {
      div.remove();
    }

  };
  
  
  return (
    <Serv>
      <Squircle
        onMouseEnter={onMouseEnter || handleMouseEnterInternal}
        onMouseLeave={handleMouseLeave}
        a={hoverColor}
        onClick={onClick}
        to={pathModif}
        id={id}
        b= {active ? 1 : 0}
        >
        {icon ? icon : text[0]}
      </Squircle>
    </Serv>
  );
}


