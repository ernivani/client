import { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export const useMessage = () => {
	return useContext(MessageContext);
};

export const MessageProvider = ({ children }) => {
	const [message, setMessage] = useState("");
	const value = { message, setMessage };

	return (
		<MessageContext.Provider value={value}>
			{children}
		</MessageContext.Provider>
	);
};
