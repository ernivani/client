import styled from "styled-components";

const TopbarNav = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	width: 100%;
	height: 100%;
	overflow-x: auto;
	overflow-y: hidden;
	scrollbar-width: none;
	-ms-overflow-style: none;
	overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Serv = styled.div`
    display: inline-flex;
	-webkit-box-align: center;
	align-items: center;
	transition: all 0.3s ease 0s;
	position: relative;
	height: 100%;
	cursor: pointer;
	z-index: 1;
	margin: auto 8px;
`;

const Squircle = styled.span`
    background: ${(props) => (props.b ? props.a : "var(--color-grey)")};
    border-radius: ${(props) => (props.b ? "35%" : "50%")};
    width: 48px;
    height: 48px;
    cursor: pointer;
    position: relative;
    transition: border-radius 128ms ease 0s, background-color 128ms ease 0s;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: none;
    color: var(--color-lighter-grey);

    &:hover {
        border-radius: 36%;
        background: ${(props) => props.a};
    }

    &:after {
        content: "";
        position: absolute;
        bottom: -25px;
        left: 0px;
        width: 100%;
        height: 20px;
        border-radius: 4px 4px 0 0;
        background-color: var(--color-full-white);
        opacity: ${(props) => (props.b ? 1 : 0)};
        transform: scale(${(props) => (props.b ? 1 : 0)});
        transition: all 0.3s ease;
        pointer-events: none;
    }

    &:hover:after {
        bottom: ${(props) => (props.b ? "-25px" : "-22px")};
        opacity: 1;
        transform: scale(${(props) => (props.b ? 1 : 0.7)});
    }

`;



const Divider = styled.div`
    display: inline-flex;
    min-width: 1px;    
    height: 32px;
    background-color: var(--color-grey);    
    -webkit-box-align: center;
    align-items: center;
    transition: all 0.3s ease 0s;
    position: relative;
    cursor: pointer;
    z-index: 1;
    margin: auto 8px;
`;

export { 
    TopbarNav, 
    Serv, 
    Squircle, 
    Divider 
};
