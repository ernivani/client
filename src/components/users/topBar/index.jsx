import { FaFire, FaPlus, FaSignOutAlt, FaServer } from "react-icons/fa";
import { useParams } from "react-router-dom";
import React, { useCallback, useEffect } from "react";

import { TopbarNav, Serv, Squircle, Divider } from "./css";

export default function TopBar( props ) {

    const { id,cid,serverList, navigate, addServer } = props;

    useEffect(() => {
        const topbarNav = document.querySelector(".topbar_nav");

        function handleWheelEvent(e) {
            e.preventDefault();
            topbarNav.scrollLeft += e.deltaY;
        }

        topbarNav.addEventListener("wheel", handleWheelEvent);

        return () => {
            topbarNav.removeEventListener("wheel", handleWheelEvent);
        };
    }, []);

    return (
        <TopbarNav className="topbar_nav">
            <SideBarIcon
                id="@me"
                nav={navigate}
                icon={<FaFire />}
                text="Messages privé"
                active={id === "@me"}
                hoverColor="var(--color-blurple)"
            />
            <Divider />

            {serverList.map(({ id: serverId, name: server_name, cid: cid }) => (
                <SideBarIcon
                    key={serverId}
                    nav={navigate}
                    id={serverId}
                    cid={cid}
                    icon={<FaServer />}
                    text={server_name}
                    active={id == serverId}
                    hoverColor="var(--color-yell-bubble)"
                />
            ))}
            <Divider />
            <SideBarIcon
                id="addServer"
                nav={navigate}
                icon={<FaPlus />}
                text="Créer un serveur"
                active={false}
                hoverColor="var(--color-green-bubble)"
                onClick={addServer}
            />
        </TopbarNav>
    );
}

function SideBarIcon(props) {
    const { icon, text, active, hoverColor, id, cid, nav, onClick } = props;

    let pathModif = "";
    if (id !== "addServer") {
        pathModif = id === "@me" ? `/channels/${id}` : `/channels/${id}/${cid}`;
    }

    return (
        <Serv>
            <Squircle
                a={hoverColor}
                onClick={
                    active ? null : onClick ? onClick : () => nav(pathModif)
                }
                id={id}
                b={active ? 1 : 0}
                aria-label={text}
            >
                {icon ? icon : text[0]}
            </Squircle>
        </Serv>
    );
}
