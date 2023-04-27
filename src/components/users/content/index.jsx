import {  
    BottomContent,
    SideBar,
    Content,
    Top,
    ChannelName,
    Messages,
    InputContainer,
    InputWrapper,
    AttachButton,
    Input,
    RightBar,
    MembersWarp,
    MembersHeader,
    MembersTitle,
    MembersCount,
    MembersContainer,
    Member,
    MemberInfo,
    MemberAvatar,
    MemberName,
    MemberActivity,
    MemberActivityName,
} from "./css";

export default function BotContent() {
    return (
        <BottomContent>
            <SideBar>
                <div>test</div>
            </SideBar>
            <Content>
                <Top>
                    <ChannelName>test</ChannelName>
                </Top>
                <Messages>
                </Messages>
                <InputContainer>
                    <InputWrapper>
                        <AttachButton>
                            <svg width="24" height="24" viewBox="0 0 24 24"><path class="attachButtonPlus-3IYelE" fill="currentColor" d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"></path></svg>
                        </AttachButton>
                        <Input placeholder="Message #test" />
                    </InputWrapper>
                </InputContainer>
            </Content>
            <RightBar>
                <MembersWarp>
                    <MembersHeader>
                        <MembersTitle>Server Owner</MembersTitle>
                        <MembersCount>1</MembersCount>
                    </MembersHeader>
                    <MembersContainer>
                        <Member>
                            <MemberAvatar>
                                <img src="https://api.dicebear.com/5.x/personas/svg?seed=ernicani" alt="avatar" />
                            </MemberAvatar>
                            <MemberInfo>
                                <MemberName>ernicani</MemberName>
                                <MemberActivity>Playing <MemberActivityName>Visual Studio Code</MemberActivityName></MemberActivity>
                            </MemberInfo>
                        </Member>
                    </MembersContainer>
                </MembersWarp>
            </RightBar>


        </BottomContent>
    )
}

{/* <div class="bottom_content">
                        <div class="sidebar">

                        </div>
                        <div class="content">
                            <div class="top">
                                <span class="channel_name">#general</span>
                            </div>
                            <div class="message_container">
                                <div class="messages">
                                </div>
                                <div class="input_container">
                                    <div class="input_wrapper">
                                        <button class="attachButton">
                                            <svg width="24" height="24" viewBox="0 0 24 24"><path class="attachButtonPlus-3IYelE" fill="currentColor" d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"></path></svg>
                                        </button>
                                        <input class="input" type="text" placeholder="Message #general" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rightbar">
                            <div class="members_warp">
                                <div class="members_header">
                                    <span class="members_title">Server Owner</span>
                                    <span class="members_count">1</span>
                                </div>
                                <div class="members_container">
                                    <div class="member"id="member">
                                        <div class="member_avatar">
                                            <img src="https://api.dicebear.com/5.x/personas/svg?seed=ernicani" alt="avatar">
                                        </div>
                                        <div class='member_info'>
                                            <div class="member_name">ernicani</div>
                                            <div class="member_activity">Playing <span class="member_activity_name">Visual Studio Code</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="members_header">
                                    <span class="members_title">Moderator</span>
                                    <span class="members_count">5</span>
                                </div>
                                <div class="members_container">
                                    <div class="member">
                                        <div class="member_avatar">
                                            <img src="https://api.dicebear.com/5.x/personas/svg?seed=ararara" alt="avatar">
                                        </div>
                                        <div class='member_info'>
                                            <div class="member_name">ararara</div>
                                            <div class="member_activity">Playing <span class="member_activity_name">Minecraft</span></div>
                                        </div>
                                    </div>
                                    <div class="member">
                                        <div class="member_avatar">
                                            <img src="https://api.dicebear.com/5.x/personas/svg?seed=ernicani" alt="avatar">
                                        </div>
                                        <div class='member_info'>
                                            <div class="member_name">ernicani</div>
                                            <div class="member_activity">Playing <span class="member_activity_name">Visual Studio Code</span></div>
                                        </div>
                                    </div>
                                    <div class="member">
                                        <div class="member_avatar">
                                            <img src="https://api.dicebear.com/5.x/personas/svg?seed=ararara" alt="avatar">
                                        </div>
                                        <div class='member_info'>
                                            <div class="member_name">ararara</div>
                                            <div class="member_activity">Playing <span class="member_activity_name">Minecraft</span></div>
                                        </div>
                                    </div>
                                    <div class="member">
                                        <div class="member_avatar">
                                            <img src="https://api.dicebear.com/5.x/personas/svg?seed=ernicani" alt="avatar">
                                        </div>
                                        <div class='member_info'>
                                            <div class="member_name">ernicani</div>
                                            <div class="member_activity">Playing <span class="member_activity_name">Visual Studio Code</span></div>
                                        </div>
                                    </div>
                                    <div class="member">
                                        <div class="member_avatar">
                                            <img src="https://api.dicebear.com/5.x/personas/svg?seed=ararara" alt="avatar">
                                        </div>
                                        <div class='member_info'>
                                            <div class="member_name">ararara</div>
                                            <div class="member_activity">Playing <span class="member_activity_name">Minecraft</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="members_header">
                                    <span class="members_title">Members</span>
                                    <span class="members_count">99</span>
                                </div>
                                <div class="members_container" id="members_container">
                                </div>
                            </div>
                        </div>
                    </div> */}