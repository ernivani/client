import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { io } from "socket.io-client";
import SideBar from "./sideBar";
import Content from "./Content";
import ChatBar from "./ChatBar";

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

const User2 = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-width: 320px;
    min-width: 320px;
    display: flex;
    @media (max-width: 768px) {
        display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
    }
`;

export function Users() {
    const userCache = localStorage.getItem("userCache");
    if (!userCache) {
        window.location.href = "/log";
    }
    const token = JSON.parse(userCache).token;
    const userId = JSON.parse(userCache).userId;

    const [loading, setLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const socket = io("https://api.impin.fr/");

    useEffect(() => {
        socket.emit("add-user", userId);
        setTimeout(() => {
            setLoading(false);
        }
        , 1000);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    } else {
        return (
            <User id="uwu">
                <User2 className="user" isVisible={isVisible}>
                    <FakeParent className="fakeParent">
                        <SideBar
                            socket={socket}
                            userId={userId}
                            isVisible={isVisible}
                            setIsVisible={setIsVisible}
                        />
                    </FakeParent>
                    <Content socket={socket} />
                </User2>
                <ChatBar
                    socket={socket}
                    userId={userId}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                />
            </User>
        );
    }
}
