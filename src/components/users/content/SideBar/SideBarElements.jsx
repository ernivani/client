import styled from "styled-components";

export const SideBarContainer = styled.div`
    height: 100%;
    background-color: var(--color-dark-grey);
    z-index: 1;
    width: 24rem;
    min-width: 24rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 896px) {
        display: none;
    }
`;

export const ServerNameContainer = styled.div`
    height: 5rem;
    min-height: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1rem;
    cursor: pointer;

    &:hover {
        background-color: var(--color-hover-grey);
    }
`;

export const ServerInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

export const ServerName = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--color-full-white);
`;

export const ServerMembers = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ServerMembersTotal = styled.div`
    margin-right: 1rem;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.5rem;
    color: var(--color-darker-white);
`;

export const ServerMembersCount = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 1.5rem;
    color: var(--color-full-white);
    margin-left: 0.2rem;
`;

export const ServerMembersText = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.5rem;
    color: var(--color-whiter-dark);
    margin-left: 0.2rem;
`;

export const ServerMembersOnline = styled.div`
    margin-right: 1rem;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.5rem;
    color: var(--color-darker-white);
`;

export const ServerAction = styled.div`
    margin-left: auto;
    margin-right: 1rem;
`;

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

export const UserTag = styled.div``;
