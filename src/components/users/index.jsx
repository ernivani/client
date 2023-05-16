import React, { useState, useEffect, useCallback } from "react";
import { io } from "socket.io-client";
import TopBar from "./topBar";
import { useParams, useNavigate } from "react-router-dom";

import { UwU, Topbar } from "./css.jsx";

import BotContentServer from "./servContent/index.jsx";

import BotContentFriends from "./friendsContent/index.jsx";

import { MessageProvider } from "./MessageContext";

import "./loading.css";
import SettingsContent from "./SettingsContent";

export function Users() {
    const { id, cid } = useParams();
    const navigate = useNavigate();

    let userId;
    let username;
    try {
        const userCache = localStorage.getItem("userCache");
        if (!userCache) {
            window.location.href = "/log";
        }
        userId = JSON.parse(userCache).userId;
        username = JSON.parse(userCache).username;
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

    const ActualServer = serverList.find((server) => server.id == id);

    if (!ActualServer && id != "@me") {
        navigate("/channels/@me");
    }

    if (loading) {
        return (
            <div className="spinner_conatainer">
                <div className="spinner"></div>
            </div>
        );
    } else {
        return (
            <MessageProvider>
                {!isInSettings ? null : (
                    <SettingsContent
                        settings={isInSettings}
                        toggleSettings={toggleSettings}
                        disconnect={disconnect}
                    />
                )}
                <UwU id="UwU">
                    <Topbar className="user">
                        <TopBar
                            id={id}
                            cid={cid}
                            serverList={serverList}
                            addServer={addServer}
                            navigate={navigate}
                        />
                    </Topbar>

                    {!id || id === "@me" ? (
                        <BotContentFriends
                            toggleSettings={toggleSettings}
                            userName={username}
                        />
                    ) : (
                        <BotContentServer
                            userId={userId}
                            socket={socket}
                            toggleSettings={toggleSettings}
                            ActualServer={ActualServer}
                            userName={username}
                        />
                    )}
                </UwU>
            </MessageProvider>
        );
    }
}
