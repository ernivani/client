import { FaFire, FaPlus, FaSignOutAlt, FaServer } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";

import { createRoot } from "react-dom/client";

// import alll the styles from css.jsx

import { FakeParent, Parent, Serv, Enfant, Squircle, Divider } from "./css";

export default function SideBar({ socket,userId }) {

    const { id } = useParams();
    console.log(id)
    const [serverList, setServerList] = useState([]);
    

    const disconnect = useCallback((e) => {
        localStorage.removeItem("userCache");
        window.location.href = "/log";
    }, []);

    const addServer = useCallback((e) => {
        const serverName = prompt("Nom du serveur");
        if (serverName) {
            socket.emit("create-server", { serverName, userId });
        }
    }, []);


    useEffect(() => {
        socket.emit("get-server-list", userId);

        socket.on("server-list", (data) => {
            setServerList(data);
            console.log(data);

        });
        socket.on("server-created", (data) => {
            setServerList((old) => [...old, data]);

        });

    }, []);



    return (
        <FakeParent>
            <Parent>
                <SideBarIcon
                    id="@me"
                    icon={<FaFire />}
                    text="Messages privé"
                    active={id === "@me"}
                    hoverColor="var(--color-blurple)"
                />
                <Divider />
                {serverList.map(({ id: serverId, name:server_name }) => (
                    <SideBarIcon
                        key={serverId}
                        id={serverId}
                        icon={<FaServer />}
                        text={server_name}
                        active={id == serverId}
                        hoverColor="var(--color-yell-bubble)"
                    />
                ))}
                <SideBarIcon
                    id="addServer"
                    icon={<FaPlus />}
                    text="Créer un serveur"
                    active={false}
                    hoverColor="var(--color-green-bubble)"
                    onClick={addServer}
                />
                <SideBarIcon
                    id="disconnect"
                    icon={<FaSignOutAlt />}
                    text="Déconnexion"
                    active={false}
                    hoverColor="var(--color-red-bubble)"
                    onClick={disconnect}
                />
            </Parent>
        </FakeParent>
    );
}

function SideBarIcon(props) {
    const { icon, text, active, onClick, onMouseEnter, hoverColor, id } = props;

    let pathModif = "";
    if (id === "addServer" || id === "disconnect") {
        pathModif = "#";
    } else {
        pathModif = "/channels/" + id;
    }

    const handleMouseEnterInternal = (event) => {
        const pos = event.currentTarget.getBoundingClientRect().top + 5;
    
        const enfant = (
            <Enfant
                style={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: "var(--font-family)",
                    top: `${pos}px`,
                    height: "fit-content",
                    zIndex: "999",
                    opacity: "1",
                    transition: "opacity 0.5s ease-in-out",
                    willChange: "opacity",
                }}
            >
                {text}
            </Enfant>
        );
    
        const container = document.createElement("div");
        container.setAttribute("id", "popup");
        document.querySelector(".user").appendChild(container);
    
        
        createRoot(container).render(enfant);
    };
    
    const handleMouseLeave = () => {
        const div = document.getElementById("popup");
        if (div) {
            div.remove();
        }
    };

    return (
        <Serv>
            <Squircle
                onMouseEnter={onMouseEnter || handleMouseEnterInternal}
                onMouseLeave={handleMouseLeave}
                a={hoverColor}
                onClick={onClick}
                to={pathModif}
                id={id}
                b={active ? 1 : 0}
            >
                {icon ? icon : text[0]}
            </Squircle>
        </Serv>
    );
}
