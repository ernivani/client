import ChannelBar from "./ChannelBar";
import ChatBar from "./ChatBar";
import styled from "styled-components";

const Base = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position: relative;
    flex-grow: 1;
`;

const Contenue = styled.div`
    display: flex;
    justify-content: flex-start;
    flex: 1 1 auto;
`;



const Content = (messageList) => {
    return (
    <Base>
        <Contenue>
            <ChannelBar />
            <ChatBar messageList={messageList} />
        </Contenue>
    </Base>
    );
}

export default Content;