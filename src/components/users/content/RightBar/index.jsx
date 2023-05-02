import React from "react";

import {
    RightBarContainer,
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
} from "./RightBarElements";

export default function RightBar() {
    return (
        <RightBarContainer>
            <MembersWarp>
                <MembersHeader>
                    <MembersTitle>Server Owner</MembersTitle>
                    <MembersCount>1</MembersCount>
                </MembersHeader>
                <MembersContainer>
                    <Member>
                        <MemberAvatar>
                            <img
                                src="https://api.dicebear.com/5.x/personas/svg?seed=ernicani"
                                alt="avatar"
                            />
                        </MemberAvatar>
                        <MemberInfo>
                            <MemberName>ernicani</MemberName>
                            <MemberActivity>
                                Playing{" "}
                                <MemberActivityName>
                                    Visual Studio Code
                                </MemberActivityName>
                            </MemberActivity>
                        </MemberInfo>
                    </Member>
                </MembersContainer>
            </MembersWarp>
        </RightBarContainer>
    );
}
