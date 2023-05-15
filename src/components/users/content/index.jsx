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

import SideBar from "./SideBar";
import RightBar from "./RightBar";

export default function BotContent(params) {
    console.log(params);
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
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    className="attachButtonPlus-3IYelE"
                                    fill="currentColor"
                                    d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                                ></path>
                            </svg>
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
