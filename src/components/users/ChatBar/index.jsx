import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const Base = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position: relative;
    flex-grow: 1;
    width: 100%;
    height: 100%;
`;

const MobileClass = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: ${({ isVisible }) => (isVisible ? 'none' : 'block')};
    }
`;

const Button = styled(FaBars)`
    display: none;
    @media (max-width: 768px) {
        display: ${({ isVisible }) => (isVisible ? 'none' : 'block')};
        margin: 2rem;
        font-size: 2rem;
        cursor: pointer;

    }
`;

export default function ChatBar({ socket, userId, isVisible, setIsVisible }) {
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <Base>
            <MobileClass isVisible={isVisible}>
                <Button onClick={handleButtonClick} />
            </MobileClass>
        </Base>
    );
}
