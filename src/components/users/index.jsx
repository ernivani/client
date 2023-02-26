import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';

import SideBar  from "./sideBar";
import Content from "./Content";

import checkAuth from '../accountBox/checkAuth';

const FakeParent = styled.div`
  height: 100%;
  overflow: hidden;
`;

const User = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
`;

import './loading.css';



export function Users() {

  const [loading, setLoading] = useState(true);

    const [serverList, setServerList] = useState([]);

  
    useEffect(() => {
      checkAuth(window.location.pathname);
      const token = localStorage.getItem('token');
      const socket = io.connect('http://213.32.89.28:5000');
      if (token) {
        socket.emit('getServer', token);
        socket.on('getServerResponse', (data) => {
          console.log(data);
          if (data.status === 'success') {
            setServerList(data.server);    
            setTimeout(() => {
              setLoading(false);
            }, 700);
            socket.disconnect();
          } else {
            console.log("ahhjikeafhj");
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
        <User id='uwu'>
          <User className='user'>
            <FakeParent className='fakeParent'>
              <SideBar serverList={serverList} />
            </FakeParent>
            <Content />
          </User>
        </User>
      );
    }

}
  
