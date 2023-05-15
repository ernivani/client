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
} from "./css";

import { FaPlusCircle } from "react-icons/fa";


import SideBar from "./SideBar";
import RightBar from "./RightBar";

export default function BotContent(params) {
    console.log(params);
    return (
        <BottomContent>
            <SideBar toggleSettings={params.toggleSettings} />
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
            <RightBar />
        </BottomContent>
    );
}
