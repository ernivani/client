import {
	BottomContent,
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
	SideBar,
	ServerNameContainer,
	ServerInfo,
	ServerName,
	ServerMembers,
	ServerMembersTotal,
	ServerMembersCount,
	ServerMembersText,
	ServerMembersOnline,
} from "./css";

export default function BotContent() {
	return (
		<BottomContent>
			<SideBar>
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
				</ServerNameContainer>
			</SideBar>
			<Content>
				<Top>
					<ChannelName>#general</ChannelName>
				</Top>
				<Messages></Messages>
				<InputContainer>
					<InputWrapper>
						<AttachButton>
							<svg width="24" height="24" viewBox="0 0 24 24">
								<path
									className="attachButtonPlus-3IYelE"
									fill="currentColor"
									d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
								></path>
							</svg>
						</AttachButton>
						<Input
							placeholder="Message #general"
							autocomplete="off"
							autocorrect="off"
							autocapitalize="off"
							spellcheck="false"
						/>
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
			</RightBar>
		</BottomContent>
	);
}
