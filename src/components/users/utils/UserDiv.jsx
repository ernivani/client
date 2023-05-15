import React from "react";
import styled from "styled-components";

export const UserInfoContainer = styled.div`
    padding: 0 1rem;
    margin: 0.8rem;
    background-color: var(--color-primary);
    border-radius: 10px;
`;

export const UserInfoWarp = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
`;

export const UserAvatar = styled.div`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
`;

export const ImgAvatar = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
`;

export const UserInformation = styled.div`
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
`;

export const UserName = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
    color: var(--color-full-white);
`;

import ButtonSettings from "./ButtonSettings";

export default function UserDiv(props) {
    return (
        <UserInfoContainer>
            <UserInfoWarp>
                <UserInfo>
                    <UserAvatar>
                        <ImgAvatar
                            src="https://api.dicebear.com/5.x/personas/svg?seed=ernicani"
                            alt="avatar"
                        />
                    </UserAvatar>
                    <UserInformation>
                        <UserName>ernicani</UserName>
                    </UserInformation>
                    <ButtonSettings toggleSettings={props.toggleSettings} />
                </UserInfo>
            </UserInfoWarp>
        </UserInfoContainer>
    );
}
