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
import { FaChevronDown, FaHashtag, FaVolumeUp } from "react-icons/fa";
import UserDiv from "../../utils/UserDiv";
import styled from "styled-components";
import { useState } from "react";

const ChannelBase = styled.div`
	height: fit-content;
	width: 100%;
	display: flex;
	flex-direction: row;
	border-radius: 5px;
	align-items: center;
	cursor: pointer;
	transition: 0.2s ease 0s;
	color: var(--color-full-white);
	font-size: 0.8rem;
	font-weight: 500;
	&:hover {
		background-color: var(--color-hover-grey);
	}
`;

const Channel = styled(ChannelBase)`
	padding: 0.5rem 1rem;
	margin: 0.2rem 0;
	background-color: #2f3136;
`;

const CategoryContainer = styled.div``;

const CategoryName = styled.div`
	margin: 1rem 1rem 0rem 0.5rem;
	padding: 0rem 0.5rem;
	height: fit-content;
	display: flex;
	flex-direction: row;
	border-radius: 5px;
	align-items: center;
	cursor: pointer;
	transition: 0.2s ease 0s;
	color: var(--color-full-white);
	font-size: 0.8rem;
	font-weight: 500;
	&:hover {
		background-color: var(--color-hover-grey);
	}
`;

const CategoryAction = styled.div`
	margin-left: auto;
	margin-right: 0.5rem;
`;

export default function SideBar(props) {
	const handleChannelClick = (e, type) => {
		if (e.target.id === props.cid || type === "voice") {
			(e) => e.preventDefault();
			props.socket.emit("JoinChannel", {
				channelId: e.target.id,
				serverId: props.ActualServer.id,
			});
		}

		const path = `/channels/${props.ActualServer.id}/${e.target.id}`;
		props.navigate(path);
	};

	useState(() => {
		props.socket.on("signalData", (data) => {
			console.log(data);
		});
	}, []);
	
	return (
		<SideBarContainer>
			<ServerNameContainer>
				<ServerInfo>
					<ServerName>{props.ActualServer.name}</ServerName>
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

			<div style={{ flex: "1 1 auto", overflowY: "auto" }}>
				{props.channels.map((channel) => {
					if (!channel.parent_id && channel.type !== "category") {
						return (
							<Channel
								key={channel.id}
								onClick={(e) =>
									handleChannelClick(e, channel.type)
								}
								id={channel.id}
							>
								{channel.type === "text" ? (
									<FaHashtag />
								) : (
									<FaVolumeUp />
								)}
								{channel.name}
							</Channel>
						);
					}
					return null;
				})}
				{props.channels.map((categoryChannel) => {
					if (categoryChannel.type === "category") {
						return (
							<CategoryContainer key={categoryChannel.id}>
								<CategoryName>
									<span>{categoryChannel.name}</span>
									<CategoryAction>
										<FaChevronDown
											style={{ fontSize: "0.7rem" }}
										/>
									</CategoryAction>
								</CategoryName>
								{props.channels.map((innerChannel) => {
									if (
										innerChannel.parent_id ===
										categoryChannel.id
									) {
										return (
											<Channel
												key={innerChannel.id}
												id={innerChannel.id}
												type={innerChannel.type}
												onClick={(e) =>
													handleChannelClick(
														e,
														innerChannel.type
													)
												}
											>
												{innerChannel.type ===
												"text" ? (
													<FaHashtag />
												) : (
													<FaVolumeUp />
												)}
												{innerChannel.name}
											</Channel>
										);
									}
									return null;
								})}
							</CategoryContainer>
						);
					}
					return null;
				})}
			</div>
			<UserDiv
				toggleSettings={props.toggleSettings}
				userName={props.userName}
			/>
		</SideBarContainer>
	);
}
