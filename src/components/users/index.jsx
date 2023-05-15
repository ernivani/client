import React, { useState, useEffect, useCallback } from "react";
import { io } from "socket.io-client";
import TopBar from "./topBar";
import { useParams, useNavigate } from "react-router-dom";

import { UwU, Topbar } from "./css.jsx";

import BotContentServer from "./servContent/index.jsx";

import BotContentFriends from "./friendsContent/index.jsx";

import { MessageProvider } from "./MessageContext";

export function Users() {
    const { id } = useParams();
    const navigate = useNavigate();

    let userId;
    try {
        const userCache = localStorage.getItem("userCache");
        if (!userCache) {
            window.location.href = "/log";
        }
        userId = JSON.parse(userCache).userId;
    } catch (e) {
        localStorage.removeItem("userCache");
        window.location.href = "/log";
    }

    const [loading, setLoading] = useState(true);
    const socket = io("https://api.impin.fr");

    const [serverList, setServerList] = useState([]);

    const [isInSettings, setIsInSettings] = useState(false);

    useEffect(() => {
        socket.emit("add-user", userId);

        socket.emit("get-server-list", userId);

        socket.on("server-list", (data) => {
            setServerList(data);
            setLoading(false);
        });

        socket.on("server-created", (data) => {
            setServerList((old) => [...old, data]);
        });
    }, []);

    const addServer = (e) => {
        e.preventDefault();
        const serverName = prompt("Nom du serveur");
        if (serverName) {
            socket.emit("create-server", { serverName, userId });
        }
    };

    const disconnect = useCallback((e) => {
        e.preventDefault();
        localStorage.removeItem("userCache");
        window.location.href = "/log";
    }, []);

    const toggleSettings = useCallback(() => {
        setIsInSettings(!isInSettings);
    }, [isInSettings]);

    if (loading) {
        return <div>Loading...</div>;
    } else {
        return (
            <MessageProvider>
                <UwU id="UwU">
                    <Topbar className="user">
                        <TopBar
                            serverList={serverList}
                            addServer={addServer}
                            disconnect={disconnect}
                            navigate={navigate}
                        />
                    </Topbar>

                    {!id || id === "@me" ? (
                        <BotContentFriends />
                    ) : (
                        <BotContentServer
                            serverList={serverList}
                            userId={userId}
                            socket={socket}
                            toggleSettings={toggleSettings}
                        />
                    )}
                </UwU>
            </MessageProvider>
        );
    }
}
