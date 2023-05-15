import React, { useState, useEffect, useCallback } from "react";
import { io } from "socket.io-client";
import TopBar from "./topBar";
import { useParams, useNavigate } from "react-router-dom";

import { UwU, Topbar } from "./css.jsx";

import BotContentServer from "./servContent/index.jsx";

import BotContentFriends from "./friendsContent/index.jsx";

import { MessageProvider } from "./MessageContext";

import "./loading.css";

export function Users() {
	const { id, cid } = useParams();
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
					<div>
						<div
							style={{
								position: "absolute",
								top: "0",
								left: "0",
								zIndex: "1000",
								backgroundColor: "var(--color-dark-grey)",
								width: "100vw",
								height: "100vh",
							}}
						>
							<button
								onClick={toggleSettings}
								style={{
									position: "absolute",
									top: "1rem",
									right: "1rem",
									zIndex: "1001",
									backgroundColor: "var(--color-dark-grey)",
									border: "none",
									outline: "none",
									color: "var(--color-full-white)",
									fontSize: "1.5rem",
									cursor: "pointer",
								}}
							>
								X
							</button>
							<div
								style={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
									zIndex: "1001",
									backgroundColor: "var(--color-dark-grey)",
									border: "none",
									outline: "none",
									color: "var(--color-full-white)",
									fontSize: "1.5rem",
								}}
							>
								<button
									onClick={disconnect}
									style={{
										border: "none",
										outline: "none",
										backgroundColor:
											"var(--color-dark-grey)",
										color: "var(--color-full-white)",
										fontSize: "1.5rem",
										cursor: "pointer",
									}}
								>
									Se déconnecter
								</button>
							</div>
						</div>
					</div>
				)}
				<UwU id="UwU">
					<Topbar className="user">
						<TopBar
							id={id}
							cid={cid}
							serverList={serverList}
							addServer={addServer}
							disconnect={disconnect}
							navigate={navigate}
						/>
					</Topbar>

					{!id || id === "@me" ? (
						<BotContentFriends toggleSettings={toggleSettings} />
					) : (
						<BotContentServer
							userId={userId}
							socket={socket}
							toggleSettings={toggleSettings}
							ActualServer={ActualServer}
						/>
					)}
				</UwU>
			</MessageProvider>
		);
	}
}
