import {
    SideBarContainer,
    ServerNameContainer,
    ServerInfo,
    ServerName,
    ServerMembers,
    ServerMembersTotal,
    ServerMembersCount,
    ServerMembersText,
    ServerMembersOnline,
    ServerAction,
    UserInfoContainer,
    UserInfoWarp,
    UserInfo,
    UserAvatar,
    ImgAvatar,
    UserInformation,
    UserName,
    UserTag,
} from "./SideBarElements";

import ButtonSettings from "./ButtonSettings";

export default function SideBar() {
    return (
        <SideBarContainer>
            <ServerNameContainer>
                <ServerInfo>
                    <ServerName>Ernicani's Server</ServerName>
                    <ServerMembers>
                        <ServerMembersTotal>
                            <svg
                                stroke="white"
                                fill="#fff"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                            >
                                <circle cx="256" cy="256" r="256" />
                            </svg>
                            <ServerMembersCount>482</ServerMembersCount>
                            <ServerMembersText>Members</ServerMembersText>
                        </ServerMembersTotal>
                        <ServerMembersOnline>
                            <svg
                                stroke="green"
                                fill="#43b581"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                            >
                                <circle cx="256" cy="256" r="256" />
                            </svg>
                            <ServerMembersCount>105</ServerMembersCount>
                            <ServerMembersText>Online</ServerMembersText>
                        </ServerMembersOnline>
                    </ServerMembers>
                </ServerInfo>
                <ServerAction>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height="2em"
                        width="2em"
                    >
                        <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"></path>
                    </svg>
                </ServerAction>
            </ServerNameContainer>
            <div style={{ flex: 1 }}></div>
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
                            <UserTag></UserTag>
                        </UserInformation>
                        <ButtonSettings />
                    </UserInfo>
                </UserInfoWarp>
            </UserInfoContainer>
        </SideBarContainer>
    );
}
