import React from "react";
import styled from "styled-components";

const buttonStyles = {
    flex: "0 0 auto",
    cursor: "pointer",
    width: "32px",
    height: "32px",
    lineHeight: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    position: "relative",
    backgroundColor: "transparent",
    border: "0",
    outline: "0",
    padding: "0",
    margin: "0",
    transition: "0.2s ease 0s",
    "&:hover": {
        backgroundColor: "var(--color-hover-grey)",
    },
};

const AddButton = styled.div(buttonStyles);

const iconSize = "24px";

const StyledPath = styled.path`
    fill: rgb(255, 255, 255);
`;

export default function MuteB(props) {
    console.log(props);

    if (!props.isMuted) {
        return (
            <AddButton onClick={props.toggleMute}>
                <svg
                    className="button_icon"
                    id="microphone"
                    style={{
                        width: iconSize,
                        height: iconSize,
                    }}
                    viewBox="0 0 24 24"
                >
                    <StyledPath d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z" />
                    <StyledPath d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z" />
                    <StyledPath d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z" />
                    <StyledPath
                        d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z"
                        style={{ fill: "rgb(247, 63, 67)" }}
                    />
                </svg>
            </AddButton>
        );
    } else {
        return (
            <AddButton onClick={props.toggleMute}>
                <svg
                    className="button_icon"
                    id="microphone"
                    style={{
                        width: iconSize,
                        height: iconSize,
                    }}
                    viewBox="0 0 24 24"
                >
                    <StyledPath d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z"></StyledPath>
                    <StyledPath d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z"></StyledPath>
                </svg>
            </AddButton>
        );
    }
}

