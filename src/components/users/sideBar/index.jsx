import { FaFire, FaPlus, FaSignOutAlt, FaServer } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';

const socket = io.connect('http://213.32.89.28:5000');

const FakeParent = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  --color-full-white: #fff;
  --color-dark: #2c2f33;
  --color-lighter-dark: #2f3136;
  --color-not-quite-black: #36393f;
  --color-actually-little-black: #2f3136;
  --color-blurple: #7289da;
  --color-yell-bubble: #f9f586;
  --color-red-bubble: #ff5555;
  --color-green-bubble: #57f287;
`;

const Parent = styled.div`
  height: 100%;
  width: 4.5rem;
  background: var(--color-not-quite-black);
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
  cursor: pointer;
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
`;

const Squircle = styled(Link)`
  background: var(--color-lighter-dark);
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
`;

const Divider = styled.hr`
  background: var(--color-lighter-dark);
  border: 1.5px solid var(--color-actually-little-black);
  border-radius: 1rem;
  margin: 0.5rem 0;
`;

export function SideBar() {
  const [spanPositions, setSpanPositions] = useState(undefined);

  const handleScroll = () => {
    const positions = {};
    const elements = document.querySelectorAll('.squircle');
    elements.forEach((element) => {
      positions[element.id] = element.getBoundingClientRect().top + window.scrollY;
    });
    setSpanPositions(positions);
  };

  const disconnect = () => {
    // todo: handle disconnection
    alert('todo: handle disconnection');
  };

  return (
    <FakeParent onScroll={handleScroll}>
      <Parent>
        <SideBarIcon
          icon={<FaFire />}
          text="Messages privé"
          active={true}
          hoverColor={"var(--color-blurple)"}
          spanPositions={spanPositions}

          
        />
        <Divider />
        {[...Array(5)].map((e, i) => (
          <SideBarIcon
            key={i}
            id={i}
            icon={<FaServer />}
            text={`Serveur ${i}`}
            active={false}
            hoverColor={"var(--color-yell-bubble)"}
            spanPositions={spanPositions}
          />
        ))}
        <Divider />
        <SideBarIcon
          id={0}
          icon={<FaPlus />}
          text="Créer un serveur"
          active={false}
          hoverColor={"var(--color-green-bubble)"}
          onClick={() => {
            // todo: afficher la fenêtre de création de serveur
            alert('todo: afficher la fenêtre de création de serveur');
          }}
          spanPositions={spanPositions}
        />
        <SideBarIcon
          id={0}
          icon={<FaSignOutAlt />}
          text="Déconnexion"
          active={false}
          hoverColor={"var(--color-red-bubble)"}
          onClick={disconnect}
        />
      </Parent>
    </FakeParent>
  );
}

function SideBarIcon(props) {
  const { icon, text, active, onClick, onMouseEnter, hoverColor, id, spanPositions } = props;
  const [hoverPosition, setHoverPosition] = useState(null);
  const pathModif = '/channels/' + id;
  let pos;
  if (spanPositions === undefined) {
    pos = 300;
  } else {
    pos = spanPositions[id];
  }
  const handleMouseEnterInternal = (event) => {
    setHoverPosition(event.currentTarget.getBoundingClientRect().top + 11);
  };
  const handleMouseLeave = () => {
    setHoverPosition(null);
  };
  return (
    <Serv>
      {hoverPosition && <Enfant style={{ top: hoverPosition, height: 'fit-content' }}>{text}</Enfant>}
      <Squircle
        onMouseEnter={onMouseEnter || handleMouseEnterInternal}
        onMouseLeave={handleMouseLeave}
        a={hoverColor}
        onClick={onClick}
        to={pathModif}
        id={id}
        className="squircle"
      >
        {icon ? icon : text[0]}
      </Squircle>
    </Serv>
  );
}


