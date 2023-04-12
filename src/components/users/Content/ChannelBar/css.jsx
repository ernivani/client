import styled from 'styled-components';
import { Link } from "react-router-dom";


const SideBar = styled.div`
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: rgb(43, 45, 49);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 10px 0 0 10px;
`;

const PrivateChannels = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    flex: 1 1 0%;
    width: 100%;
`;

const Panel = styled.section`
    background-color: rgb(35, 36, 40);
    z-index: 1;
    /* width: 240px; */
    
`;

const PanelContainer = styled.div `
    display: flex;
    height: 52px;
    padding: 0 8px;
    margin-bottom: 1px;
    align-items: center;
`;

const PanelAvatar = styled.div`
    min-width: 120px;
    margin-left: -2px;
    align-items: center;
    display: flex;
    margin-right: 8px;
    height: 39px;
    padding: 0 8px;
    border-radius: 4px;
    background-color: rgb(35, 36, 40);
    flex: 1 1 auto;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    transition: 0.2s ease 0s;
    cursor: pointer;
    &:hover {
        background-color: rgba(79,84,92,0.4);
    }

`;

const IconAvatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: relative;
    outline: 0;

`;

const MaskIcon = styled.svg`
    width: 40px;
    position: absolute;
    pointer-events: none;
    display: block;
    width: auto;
`;

const NameTag = styled.div`
    flex-gow: 1;
    margin-right: 8px;
    min-width: 0;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-top: 4px; 
`;

const UsernameDiv = styled.div`
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #fff;
    overflow: hidden;

`;

const Username = styled.div`
    line-height: 18px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;    
`;

const Tag = styled.div`
    font-size: 12px;
    line-height: 13px;
    font-weight: 500;
    color: #b9bbbe;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const PanelButtons = styled.div`
    flex: 0 1 auto;
    display: flex;
    align-items: stretch;
    flex: 0 1 auto;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    margin-right: 0;
    padding: 0 8px;
    
`;

const AddButton = styled.i`
    cursor: pointer;
    width: 32px;
    height: 32px;
    line-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    position: relative;
    color: #fff;
    background-color: transparent;
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
    flex: 0 0 auto;
    transition: 0.2s ease 0s;
    &:hover {
        background-color: rgba(79,84,92,0.4);
    }
`;

const ButtonIconDiv = styled.div`
    background-image: linear-gradient(180deg, #2f3136, #292b2f, transparent 0);
`;

const ButtonIcon = styled.svg`
    width: 24px;
    height: 24px;
    display: block;
    fill: currentColor;
`;

const ChannelsListContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex: 1 1 0%;
`;


const ChannelsList = styled.ul`
    margin: 10px;
    padding: 0;
`;

const ChannelsListItem = styled.li`
    background-color: inherit;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    transition: 0.2s ease 0s;
    border-radius: 5px;
    &:hover {
        background-color: rgba(79,84,92,0.4);
    }
`;

const ChannelsListLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    width: 100%;
    height: 100%;
    padding: 10px 25px;
    display: flex;
    align-items: center;
    
`;

const ChannelName = styled.div`
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ServerName = styled.div`
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: #2f3136;
    padding: 10px 25px;
    border-radius: 5px;
    &:hover {
        background-color: rgba(79,84,92,0.4);
    }
`;

export {
    SideBar,
    PrivateChannels, 
    Panel, 
    PanelContainer, 
    PanelAvatar, 
    IconAvatar, 
    MaskIcon, 
    NameTag, 
    UsernameDiv, 
    Username, 
    Tag, 
    PanelButtons, 
    AddButton, 
    ButtonIconDiv, 
    ButtonIcon, 
    ChannelsList,
    ChannelsListContainer, 
    ChannelsListItem,
    ChannelsListLink,
    ChannelName,
    ServerName
}