import { FaFire, FaPlus, FaSignOutAlt, FaServer } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";

import { createRoot } from "react-dom/client";

// import alll the styles from css.jsx

import { FakeParent, Parent, Serv, Enfant, Squircle, Divider } from "./css";

export default function SideBar({ serverList }) {
    const { id } = useParams();
    

    const disconnect = useCallback((e) => {
        localStorage.removeItem("userCache");
        window.location.href = "/log";
    }, []);

    const addServer = useCallback((e) => {
        console.log(e);
        console.log("todo : handle add server");
        const serverName = prompt("Nom du serveur :");
        if (serverName) {
            console.log(serverName);
        }
    }, []);

    let list = [];

    for (let i = 0; i <= 20; i++) {
        let serverName = "server" + i;
        let server = { id: i, server_name: serverName };
        list.push(server);
    }

    console.log(list);
    serverList = list;

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
                {serverList.map(({ id: serverId, server_name }) => (
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
    const [hoverPosition, setHoverPosition] = useState(null);

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
                    opacity: "0",
                    transition: "opacity 0.5s ease-in-out", // ajout de la transition
                }}
            >
                {text}
            </Enfant>
        );

        const container = document.createElement("div");
        container.setAttribute("id", "popup");
        document.querySelector(".user").appendChild(container);

        // Mettre l'opacité à 1 avec une transition de 0.5s
        
        // Fonction pour augmenter l'opacité petit à petit
        let opacity = 0;
        const intervalId = setInterval(() => {
            opacity += 0.1;
            enfant.props.style.opacity = opacity;
            createRoot(container).render(enfant);
            if (opacity >= 1) {
                clearInterval(intervalId);
            }
        }, 15);
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
