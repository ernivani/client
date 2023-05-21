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
} from "./css";

import { FaPlusCircle } from "react-icons/fa";

import SideBar from "./SideBar";
import RightBar from "./RightBar";
import { useEffect, useState } from "react";

export default function BotContentServer(params) {
	const [messages, setMessages] = useState([]);
	const [channels, setChannels] = useState([]);

	useEffect(() => {
		params.socket.emit("GetMessages", {
			serverId: params.ActualServer.id,
			channelId: params.cid,
		});

		params.socket.emit("GetChannels", {
			serverId: params.ActualServer.id,
		});

		const handleGetMessages = (data) => {
			setMessages(data);
		};
		params.socket.on("GetMessages", handleGetMessages);

		const handleSendMessages = (data) => {
			setMessages((messages) => [...messages, data]);
		};
		params.socket.on("SendMessages", handleSendMessages);

		const handleGetChannels = (data) => {
			setChannels(data);
		};
		params.socket.on("GetChannels", handleGetChannels);

		return () => {
			params.socket.off("GetMessages", handleGetMessages);
			params.socket.off("SendMessages", handleSendMessages);
		};
	}, [params.ActualServer, params.cid, params.socket]);

	const sendMessage = (message) => {
		params.socket.emit("SendMessages", {
			content: message,
			channelId: params.cid,
			userId: params.userId,
			serverId: params.ActualServer.id,
			username: params.userName,
			avatar: params.userAvatar,
		});
	};

	console.log(messages);

	return (
		<BottomContent>
			<SideBar
				toggleSettings={params.toggleSettings}
				ActualServer={params.ActualServer}
				userName={params.userName}
				cid={params.cid}
				channels={channels}
				navigate={params.navigate}
				socket={params.socket}
			/>
			<Content>
				<Top>
					<ChannelName>#general</ChannelName>
				</Top>
				<Messages>
					{messages.map((message) => {
						return (
							<div key={message.id}>
								<div>
									{message.user.name} -{" "}
									{new Date(
										message.created_at
									).toLocaleTimeString()}
								</div>

								{message.content}
							</div>
						);
					})}
				</Messages>
				<InputContainer>
					<InputWrapper>
						<AttachButton>
							<FaPlusCircle style={{ fontSize: "1.5rem" }} />
						</AttachButton>
						<Input
							placeholder="Message #general"
							autoComplete="off"
							autoCorrect="off"
							autoCapitalize="off"
							spellCheck="false"
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									sendMessage(e.target.value);
									e.target.value = "";
								}
							}}
						/>
					</InputWrapper>
				</InputContainer>
			</Content>
			<RightBar />
		</BottomContent>
	);
}
