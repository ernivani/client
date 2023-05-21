import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SettingsContainer = styled.div`
	position: absolute;
	z-index: 1000;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--color-primary);

	opacity: 0;
	transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
	&.expand {
		opacity: 1;
	}
`;

const Backdrop = styled(motion.div)`
	position: relative;
	background: var(--color-grey);
	z-index: 1000;
`;

const SettingsTitle = styled.h1`
	font-size: 2rem;
	color: var(--color-full-white);
	margin: 0;
	padding: 0;
`;

const SettingsButton = styled.button`
	background: var(--color-whiter-dark);
	color: var(--color-full-white);
	border: none;
	padding: 10px 15px;
	margin: 10px 0;
	font-size: 16px;
	border-radius: 5px;
	transition: background-color 0.3s ease;

	&:hover {
		cursor: pointer;
		background: var(--color-little-dark-hover);
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	&:active {
		background: var(--color-darker-hover);
	}
`;

function Marginer(props) {
	const { direction } = props;

	if (direction === "horizontal") return <HorizontalMargin {...props} />;
	else {
		return <VerticalMargin {...props} />;
	}
}

const HorizontalMargin = styled.span`
	display: flex;
	width: ${({ margin }) =>
		typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span`
	display: flex;
	height: ${({ margin }) =>
		typeof margin === "string" ? margin : `${margin}px`};
`;

const backdropVariants = {
	initial: {
		opacity: 0,
		scale: 1.3,
	},
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
	exit: {
		opacity: 0,
		scale: 1.3,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};

export default function SettingsContent(props) {
	const [isExpanded, setExpanded] = useState(false);
	const { t, i18n } = useTranslation();

	useEffect(() => {
		setExpanded(true);
	}, []);

	const handleCloseSettings = (e) => {
		e.preventDefault();
		setExpanded(false);

		setTimeout(() => {
			props.toggleSettings();
		}, 300);
	};

	const handleChangeLanguage = (lang) => (e) => {
		e.preventDefault();
		i18n.changeLanguage(lang);
	};

	const langa = localStorage.getItem("i18nextLng");

	return (
		<SettingsContainer className={isExpanded ? "expand" : ""}>
			<Backdrop
				variants={backdropVariants}
				initial="initial"
				animate={isExpanded ? "animate" : "exit"}
			>
				<SettingsTitle>Settings</SettingsTitle>

				<div style={{ display: "flex", flexDirection: "column" }}>
					<h2>Language</h2>
					<SettingsButton
						onClick={handleChangeLanguage("fr")}
						disabled={langa === "fr"}
					>
						Français
					</SettingsButton>
					<SettingsButton
						onClick={handleChangeLanguage("en")}
						disabled={langa === "en"}
					>
						English, UK
					</SettingsButton>
				</div>

				<Marginer direction="vertical" margin="1rem" />

				<SettingsButton onClick={handleCloseSettings}>
					Close Settings
				</SettingsButton>
				<SettingsButton onClick={props.disconnect}>
					Logout
				</SettingsButton>
			</Backdrop>
		</SettingsContainer>
	);
}
