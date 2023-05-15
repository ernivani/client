import {
    SideBarContainer,
    UserInfoContainer,
    UserInfoWarp,
    UserInfo,
    UserAvatar,
    ImgAvatar,
    UserInformation,
    UserName,
    UserTag,
} from "./SideBarElements";

import ChannelsContainer from "./ChannelsContainer";

import ButtonSettings from "./ButtonSettings";

export default function SideBar(props) {
    return (
        <SideBarContainer>
            <ChannelsContainer />
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
                        <ButtonSettings toggleSettings={props.toggleSettings} />
                    </UserInfo>
                </UserInfoWarp>
            </UserInfoContainer>
        </SideBarContainer>
    );
}
