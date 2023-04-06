import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const FakeParent = styled.div`
    height: 100%;
    overflow: hidden;
`;

const Parent = styled.nav`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 4.5rem;
    height: 100%;
    padding: 0.5rem 0;
    overflow: hidden scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    overflow: -moz-scrollbars-none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Serv = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto 8px;
    transition: all 0.3s ease;
    width: 48px;
    height: 48px;
`;

const Enfant = styled.span`
    display: inline-block;
    position: absolute;
    background-color: #111;
    padding: 8px 15px;
    border-radius: 5px;
    left: 5.5rem;
    font-size: 15px;
    letter-spacing: 0.5px;
    padding: 8px 15px;
    border-radius: 5px;
    transition: all 0.3s ease;
    &:before {
        content: "";
        position: absolute;
        top: 15px;
        left: -4px;
        transform: rotate(45deg);
        width: 10px;
        height: 10px;
        background-color: inherit;
    }

    /* media queries */
    @media (max-width: 768px) {
        visibility: hidden;
    }
`;

const Squircle = styled(Link)`
    background: ${(props) => (props.b ? props.a : "var(--color-dark)")};
    border-radius: ${(props) => (props.b ? "36%" : "50%")};
    width: 48px;
    height: 48px;
    cursor: pointer;
    position: relative;
    transition: border-radius 128ms, background 128ms, color 128ms;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--color-full-white);

    &:hover {
        border-radius: 36%;
        background: ${(props) => props.a};
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: -27px;
        width: 20px;
        height: 100%;
        border-radius: 0 4px 4px 0;
        background-color: var(--color-full-white);
        opacity: ${(props) => (props.b ? 1 : 0)};
        transform: scale(${(props) => (props.b ? 1 : 0)});
        transition: all 0.3s ease;
        pointer-events: none;
    }

    &:hover::after {
        left: ${(props) => (props.b ? "-27px" : "-25px")};
        opacity: 1;
        transform: scale(${(props) => (props.b ? 1 : 0.7)});
    }
`;

const Divider = styled.hr`
    background: var(--color-lighter-dark);
    border: 1.5px solid var(--color-actually-little-black);
    border-radius: 1rem;
    margin: 0.5rem 0;
`;

export { FakeParent, Parent, Serv, Enfant, Squircle, Divider };
