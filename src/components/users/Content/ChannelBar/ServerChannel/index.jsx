import styled from "styled-components";

import { 
    ChannelsList, 
    ChannelsListItem, 
    ChannelsListLink, 
    ChannelName,
    ServerName
 } from "../css";


export default function ServerChannel({ socket, serverId, channelId, userId }) {
    
    return (
        <>
            <ServerName>Server Name</ServerName>
            <ChannelsList>
                <ChannelsListItem>
                    <ChannelsListLink to={`/channels/${serverId}/${channelId}`}>
                        <ChannelName>#general</ChannelName>
                    </ChannelsListLink>
                </ChannelsListItem>
            </ChannelsList>
        </>
        
        
    );
}
