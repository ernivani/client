import styled from "styled-components";

export const SideBarContainer = styled.div`
	height: 100%;
	background-color: var(--color-dark-grey);
	z-index: 1;
	width: 24rem;
	min-width: 24rem;
	display: flex;
	flex-direction: column;

	@media (max-width: 896px) {
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
		background-color: var(--color-little-dark-hover);
	}
`;

export const ServerInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 1rem;
`;

export const ServerName = styled.div`
	font-style: normal;
	font-weight: 700;
	font-size: 1.2rem;
	line-height: 1.5rem;
	color: var(--color-full-white);
`;

export const ServerMembers = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const ServerMembersTotal = styled.div`
	margin-right: 1rem;
	font-style: normal;
	font-weight: 500;
	font-size: 0.8rem;
	line-height: 1.5rem;
	color: var(--color-darker-white);
`;

export const ServerMembersCount = styled.span`
	font-style: normal;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 1.5rem;
	color: var(--color-full-white);
	margin-left: 0.2rem;
`;

export const ServerMembersText = styled.span`
	font-style: normal;
	font-weight: 500;
	font-size: 0.8rem;
	line-height: 1.5rem;
	color: var(--color-whiter-dark);
	margin-left: 0.2rem;
`;

export const ServerMembersOnline = styled.div`
	margin-right: 1rem;
	font-style: normal;
	font-weight: 500;
	font-size: 0.8rem;
	line-height: 1.5rem;
	color: var(--color-darker-white);
`;

export const ServerAction = styled.div`
	margin-left: auto;
	margin-right: 1rem;
`;
