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

export default function DeafB(props) {
    console.log(props);

    if (!props.isDeafened) {
        return (
            <AddButton onClick={props.toggleDeafen}>
                <svg
                    className="button_icon"
                    id="deafen"
                    style={{
                        width: iconSize,
                        height: iconSize,
                    }}
                    viewBox="0 0 24 24"
                >
                    <StyledPath d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" />
                </svg>
            </AddButton>
        );
    } else {
        return (
            <AddButton onClick={props.toggleDeafen}>
                <svg
                    className="button_icon"
                    id="deafen"
                    style={{
                        width: iconSize,
                        height: iconSize,
                        fill: "var(--color-red)",
                    }}
                    viewBox="0 0 24 24"
                >
                    <StyledPath d="M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485 2 12V19.1685L6.16204 15.0065Z" />
                    <StyledPath d="M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 15 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.91686Z" />
                    <StyledPath
                        d="M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z"
                        style={{ fill: "rgb(247, 63, 67)" }}
                    />
                </svg>
            </AddButton>
        );
    }
}
