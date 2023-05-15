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

export default function BotContentFriends() {
    return (
        <BottomContent>
            <SideBar />
            <Content>
                <Top>
                    <ChannelName>#general</ChannelName>
                </Top>
                <Messages></Messages>
                <InputContainer>
                    <InputWrapper>
                        <AttachButton>
                            <FaPlusCircle style={{ fontSize: "1.5rem" }} />
                        </AttachButton>
                        <Input
                            placeholder="Message #general"
                            autocomplete="off"
                            autocorrect="off"
                            autocapitalize="off"
                            spellcheck="false"
                        />
                    </InputWrapper>
                </InputContainer>
            </Content>
        </BottomContent>
    );
}
