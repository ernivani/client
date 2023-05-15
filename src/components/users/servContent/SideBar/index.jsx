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
} from "./SideBarElements";

import { FaChevronDown } from "react-icons/fa";

import UserDiv from "../../utils/UserDiv";

export default function SideBar(props) {
	return (
		<SideBarContainer>
			<ServerNameContainer>
				<ServerInfo>
					<ServerName>{props.ServerName}</ServerName>
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
					<FaChevronDown style={{ fontSize: "1.5rem" }} />
				</ServerAction>
			</ServerNameContainer>
			<div style={{ flex: 1 }}></div>
			<UserDiv
				toggleSettings={props.toggleSettings}
				userName={props.userName}
			/>
		</SideBarContainer>
	);
}
