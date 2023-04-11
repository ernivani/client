import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position: relative;
    flex-grow: 1;
`;




export default function ChatBar({ socket, userId }) {

    return (
        <Base>
            <div>ChatBar</div>
        </Base>
        
    );
}