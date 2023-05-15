import React from "react";
import {
    BottomContent,
    Content,
    Top,
    ChannelName,
    Messages,
    InputContainer,
    InputWrapper,
    AttachButton,
    Input,
} from "../servContent/css";

import { FaPlusCircle } from "react-icons/fa";

import SideBar from "./SideBar";

export default function BotContentFriends(props) {
    return (
        <BottomContent>
            <SideBar toggleSettings= {props.toggleSettings}/>
            <Content></Content>
        </BottomContent>
    );
}
