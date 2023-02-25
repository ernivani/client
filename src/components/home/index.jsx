import { FaFire, FaPlus, FaSignOutAlt,FaServer } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import './index.css';



export function Home() {

    return (
        <div className="fakeParent">  
            <div className="parent">
                <div>
                    <span className="enfant">Connections</span>
                    <SideBarIcon icon={<FaFire />} text="Home" active={true} />
                </div>
                <div>
                    <span className="enfant">Add</span>
                    <SideBarIcon icon={<FaPlus />} text="Add" />
                </div>
            </div>
        </div>
    );

  

}

function SideBarIcon(props) {

    const { icon, text, active, id, onClick } = props;

    return (
        <li className="squircle purple-boi">
            {icon ? icon : text[0]}
        </li>

    );
}


const Divider = () => <hr className="sidebar-hr" />;

