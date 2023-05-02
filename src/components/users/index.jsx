import React, { useState, useEffect, useCallback } from "react";
import { io } from "socket.io-client";
import TopBar from "./topBar";
import { useParams, useNavigate } from "react-router-dom";

import { UwU, Topbar } from "./css.jsx";

import BotContent from "./content/index.jsx";

import { MessageProvider } from "./MessageContext";

export function Users() {
	const { id } = useParams();
	const navigate = useNavigate();

	const userCache = localStorage.getItem("userCache");
	if (!userCache) {
		window.location.href = "/log";
	}
	const token = JSON.parse(userCache).token;
	const userId = JSON.parse(userCache).userId;

	const [loading, setLoading] = useState(true);
	const [isVisible, setIsVisible] = useState(false);
	const socket = io("https://api.impin.fr");

	const [serverList, setServerList] = useState([]);

	useEffect(() => {
		socket.emit("add-user", userId);

		socket.emit("get-server-list", userId);

		socket.on("server-list", (data) => {
			setServerList(data);
			console.log(data);
			setLoading(false);
		});

		socket.on("server-created", (data) => {
			setServerList((old) => [...old, data]);
		});
		console.log(serverList);
	}, []);

	const addServer = (e) => {
		e.preventDefault();
		const serverName = prompt("Nom du serveur");
		if (serverName) {
			socket.emit("create-server", { serverName, userId });
		}
	};

	const disconnect = useCallback((e) => {
		localStorage.removeItem("userCache");
		window.location.href = "/log";
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	} else {
		return (
            <MessageProvider>
                <UwU id="UwU">
                    <Topbar className="user">
                        <TopBar
                            serverList={serverList}
                            userId={userId}
                            setIsVisible={setIsVisible}
                            addServer={addServer}
                            disconnect={disconnect}
                            navigate={navigate}
                        />
                    </Topbar>
                    <BotContent
                        serverList={serverList}
                        userId={userId}
                        socket={socket}
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                    />
                </UwU>
            </MessageProvider>
		);
	}
}
