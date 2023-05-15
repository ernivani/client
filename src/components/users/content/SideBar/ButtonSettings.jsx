import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import MuteB from "./Buttons/Mute";

const PanelButton = styled.div`
    flex: 0 1 auto;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    margin-right: 0;
    padding: 0 8px;
`;

export default function ButtonSettings() {
    const [isMuted, setIsMuted] = useState(false);
    const [isDeafened, setIsDeafened] = useState(false);
    const [isInSettings, setIsInSettings] = useState(false);

    const toggleMute = () => {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
                const audioTrack = stream.getAudioTracks()[0];
                if (audioTrack) {
                    audioTrack.enabled = !isMuted;
                    setIsMuted(!isMuted);
                    stream.getTracks().forEach((track) => track.stop());
                } else {
                    console.error("No audio track available.");
                }
            })
            .catch((error) => {
                console.error("Error accessing microphone:", error);
            });
    };

    return (
        <PanelButton>
            <MuteB isMuted={isMuted} toggleMute={toggleMute} />
        </PanelButton>
    );
}
