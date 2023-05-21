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
	color: var(--color-full-white);
	margin-left: 1rem;
`;

export const Messages = styled.div`
	flex-grow: 1;
	overflow-y: auto;
	overflow-x: hidden;
	user-select: text;
	scrollbar-width: none;
	-ms-overflow-style: none;
	overflow: -moz-scrollbars-none;
	&::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	}
`;

export const InputContainer = styled.div`
	padding: 0 1rem;
	margin: 0.8rem;
	background-color: var(--color-primary);
	border-radius: 10px;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	min-height: 48px;
`;

export const AttachButton = styled.button`
	background: transparent;
	color: var(--color-full-white);
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
	font-style: normal;
	font-weight: 500;
	font-size: 1rem;
	line-height: 1.5rem;
	color: var(--color-full-white);
	padding: 0 1rem;
	margin: 10px 0;
`;
