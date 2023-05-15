import { SideBarContainer } from "../../servContent/SideBar/SideBarElements";

import ChannelsContainer from "./ChannelsContainer";

import UserDiv from "../../utils/UserDiv";

export default function SideBar(props) {
	return (
		<SideBarContainer>
			<ChannelsContainer />
			<UserDiv
				toggleSettings={props.toggleSettings}
				userName={props.userName}
			/>
		</SideBarContainer>
	);
}
