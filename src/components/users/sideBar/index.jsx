import { FaFire, FaPlus, FaSignOutAlt, FaServer } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { createRoot } from 'react-dom/client';


const FakeParent = styled.div`
  height: 100%;
  overflow: hidden;
`;

const Parent = styled.nav`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 4.5rem;
  height: 100%;
  padding: 0.5rem 0;
  overflow: hidden scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  overflow: -moz-scrollbars-none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Serv = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 8px;
  transition: all 0.3s ease;
  width: 48px;
  height: 48px;
`;

const Enfant = styled.span`
  display: inline-block;
  position: absolute;
  background-color: #000;
  padding: 8px 15px;
  border-radius: 5px;
  left: 5.5rem;
  font-size: 15px;
  letter-spacing: 0.5px;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 15px;
    left: -4px;
    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    background-color: inherit;
  }

  /* media queries */
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

const Squircle = styled(Link)`
  background: ${props => props.b ? props.a : "var(--color-dark)"};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  transition: border-radius 128ms, background 128ms, color 128ms;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--color-full-white);
  &:hover {
    border-radius: 36%;
    background: ${props => props.a};
    
  }
  &:before {
    content: "";    
    position: absolute;
    top: 0;
    left: -25px;
    width: 1em;
    height: 100%;
    border-radius: 0 4px 4px 0;
    background-color: var(--color-full-white);
    opacity: ${props => props.b ? 1 : 0};
  }
  /* todo: change the before to an anthor element and made it appear on hover */
`;

const Divider = styled.hr`
  background: var(--color-lighter-dark);
  border: 1.5px solid var(--color-actually-little-black);
  border-radius: 1rem;
  margin: 0.5rem 0;
`;

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


