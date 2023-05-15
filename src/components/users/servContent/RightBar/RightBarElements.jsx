import styled from "styled-components";

export const RightBarContainer = styled.div`
    height: 100%;
    background-color: var(--color-dark-grey);
    z-index: 1;
    width: 20rem;
    min-width: 20rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const MembersWarp = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 5px;
        height: 100%;
        background-color: transparent;
        pointer-events: none;
        z-index: 10;
        transition: background-color 0.2s ease;
    }

    &:hover::before {
        background-color: rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar {
        width: 5px;
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 19px;
    }

    &:hover::-webkit-scrollbar-thumb {
        background-color: #0d0d0e;
    }
`;

export const MembersHeader = styled.div`
    margin: 1rem 1rem 0rem 1rem;
    height: fit-content;
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    border-radius: 5px;
    background: linear-gradient(
        80deg,
        var(--color-blurple) -50%,
        var(--color-grey) 100%
    );
`;

export const MembersTitle = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
`;

export const MembersCount = styled.span`
    margin-left: auto;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
`;

export const MembersContainer = styled.div`
    width: 100%;
    height: fit-content;

    &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
`;

export const Member = styled.div`
    margin: 1rem 1rem 0rem 0.5rem;
    height: fit-content;
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    border-radius: 5px;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: var(--color-grey);
    }
`;

export const MemberAvatar = styled.div`
    & > img {
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
    }
`;

export const MemberInfo = styled.div`
    width: 100%;
`;

export const MemberName = styled.div`
    margin-left: 1rem;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 10px;
`;

export const MemberActivity = styled.div`
    margin-left: 1rem;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    color: #7c7979;
`;

export const MemberActivityName = styled.span`
    color: #a8a8a8;
`;
