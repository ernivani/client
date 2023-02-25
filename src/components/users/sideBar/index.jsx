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
    newSpanPositions[id] = position;
    setSpanPositions(newSpanPositions);
  };

  useEffect(() => {
    // Initialize the spanPositions array with default values
    setSpanPositions([...Array(100)].map(() => '30px'));
    }, []);
  return (
    <div className="fakeParent" onScroll={handleScroll}>
      <div className="parent">
        <div>
          <span className="enfant">Messages privé</span>
          <SideBarIcon
            icon={<FaFire />}
            text="Messages privé"
            active={true}
            onMouseEnter={(event) =>
              handleMouseEnter(0, event.currentTarget.getBoundingClientRect().top)
            }
          />
        </div>
        <Divider />
        {[...Array(10)].map((e, i) => (
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
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SideBarIcon(props) {
  const { icon, text, active, onClick, onMouseEnter } = props;

  return (
    <li className="squircle purple-boi" >
      {icon ? icon : text[0]}
    </li>
  );
}

const Divider = () => <hr className="sidebar-hr" />;
