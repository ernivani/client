import ChannelBar from "./ChannelBar";
import styled from "styled-components";
import { useEffect } from "react";

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


const Content = ({socket}) => {

    return (
    <Base>
        <Contenue>
            <ChannelBar socket={socket}/>
        </Contenue>
    </Base>
    );
}

export default Content;