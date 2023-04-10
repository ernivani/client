import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SideBar from "./sideBar";
import Content from "./Content";
import io from "socket.io-client";
import AddFriendForm from "./AddFriendForm";

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

import "./loading.css";

export function Users() {

    const userCache = localStorage.getItem('userCache')
    if (!(userCache)) {
        window.location.href = "/log";
    }
    const token = JSON.parse(userCache).token;

    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [serverList, setServerList] = useState([]);
    const [messageList, setMessageList] = useState([]);
    const [socket, setSocket] = useState(null);
    
    useEffect(() => {
        const newSocket = io("https://api.impin.fr", {
            query: {
                token: token,
            },
        });
        setSocket(newSocket);

        newSocket.on("message", (data) => {
            console.log(data);
        });

        

        console.log("connecting to socket");

        return () => {
            newSocket.disconnect();
        };
    }, []);

    setTimeout(() => {
        setLoading(false);
        setLoaded(true);
    }, 1000);

    if (loading) {
        return (
            <div className="loading">
                <svg
                    width="200"
                    height="200"
                    viewBox="0 0 100 100"
                    className="loading"
                >
                    <polyline
                        className="line-cornered stroke-still"
                        points="0,0 100,0 100,100"
                        strokeWidth="10"
                        fill="none"
                    ></polyline>
                    <polyline
                        className="line-cornered stroke-still"
                        points="0,0 0,100 100,100"
                        strokeWidth="10"
                        fill="none"
                    ></polyline>
                    <polyline
                        className="line-cornered stroke-animation"
                        points="0,0 100,0 100,100"
                        strokeWidth="10"
                        fill="none"
                    ></polyline>
                    <polyline
                        className="line-cornered stroke-animation"
                        points="0,0 0,100 100,100"
                        strokeWidth="10"
                        fill="none"
                    ></polyline>
                </svg>
            </div>
        );
    } else {
        return (
            <User id="uwu">
                <User className="user">
                    <FakeParent className="fakeParent">
                        <SideBar serverList={serverList} />
                    </FakeParent>
                    <Content messageList={messageList} />
                </User>
                
                <AddFriendForm socket={socket} />
            </User>
        );
    }
}