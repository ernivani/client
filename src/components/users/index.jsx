import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

import SideBar  from "./sideBar";
import ChannelBar from "./channelBar";

import checkAuth from '../accountBox/checkAuth';

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
  --color-yell-bubble: #d0b34e;
  --color-red-bubble: #ff5555;
  --color-green-bubble: #57f287;
`;

import './loading.css';



export function Users() {

  const [loading, setLoading] = useState(true);

    const [serverList, setServerList] = useState([]);

    const navigate = useNavigate();
  
    useEffect(() => {
      checkAuth(navigate , window.location.pathname);
      const token = localStorage.getItem('token');
      const socket = io.connect('http://213.32.89.28:5000');
      if (token) {
        socket.emit('getServerList', token);
        socket.on('getServerListResponse', (data) => {
          if (data.status === 'success') {
            setServerList(data.server);    
            setTimeout(() => {
              setLoading(false);
            }, 700);
            socket.disconnect();
          } else {
            console.log(data.status);
          }
        });
      }
    }, []);


    
    
    if (loading) {
      return (
        <div className='loading'>
          <svg width="200" height="200" viewBox="0 0 100 100" className="loading">
            <polyline className="line-cornered stroke-still" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
            <polyline className="line-cornered stroke-still" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
            <polyline className="line-cornered stroke-animation" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
            <polyline className="line-cornered stroke-animation" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
          </svg>
        </div>
      )
    }else {
      return (
        <div style={{ height: '100%', width: '100vh', overflow:'hidden' }}>
          <FakeParent>
            <SideBar serverList={serverList} />
          </FakeParent>
          <ChannelBar />
        </div>
      );
    }

}
  
