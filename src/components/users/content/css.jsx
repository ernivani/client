import styled from "styled-components";

export const BottomContent = styled.div`
	width: 100%;
	height: 100%;
	background-color: var(--color-grey);
	overflow: hidden;
	border-radius: 15px 15px 0px 0px;
	display: flex;
	flex-direction: row;
`;

export const Content = styled.div`
	box-sizing: border-box;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Top = styled.div`
	width: 100%;
	height: 5rem;
	background-color: var(--color-grey);
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const ChannelName = styled.span`
	font-family: "Poppins", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 1.5rem;
	line-height: 2.25rem;
	color: var(--color-lighter-grey);
	margin-left: 1rem;
`;

export const Messages = styled.div`
	flex-grow: 1;
	overflow-y: auto;
	overflow-x: hidden;
	scrollbar-width: none;
	-ms-overflow-style: none;
	overflow: -moz-scrollbars-none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const InputContainer = styled.div`
	height: 4rem;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const InputWrapper = styled.div`
	width: 100%;
	height: 70%;
	margin: 1rem;
	margin-bottom: 2rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: var(--color-input);
	border-radius: 10px;
`;

export const AttachButton = styled.button`
	background: transparent;
	color: var(--color-lighter-grey);
	border: none;
	outline: none;
	cursor: pointer;
`;

export const Input = styled.input`
	border-radius: inherit;
	background-color: inherit;
	border: none;
	width: 100%;
	outline: none;
	padding-left: 1rem;
	font-style: normal;
	font-weight: 500;
	font-size: 1rem;
	line-height: 1.5rem;
	color: var(--color-lighter-grey);
`;

export const RightBar = styled.div`
	height: 100%;
	background-color: var(--color-dark-grey);
	z-index: 1;
	width: 25rem;
	min-width: 25rem;

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
	margin: 1rem 1rem 0rem 1rem;
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

export const SideBar = styled.div`
	height: 100%;
	background-color: var(--color-dark-grey);
	z-index: 1;
	width: 20rem;
	min-width: 25rem;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const ServerNameContainer = styled.div`
	height: 5rem;
	min-height: 5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 1rem;
	cursor: pointer;

	&:hover {
		background-color: var(--color-hover-grey);
	}
`;
