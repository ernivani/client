import axios from "axios";
import { useEffect } from "react";

export const CheckAuth = () => {

	useEffect(() => {
		let userCache = null;
		try {
			userCache = JSON.parse(localStorage.getItem("userCache"));
		} catch (e) {
			localStorage.removeItem("userCache");
			window.location.href = "/log";
		}

		if (userCache !== null) {
			axios
				.post("https://api.impin.fr/user/token", {
					uid: userCache.userId,
					token: userCache.token,
				})
				.then((res) => {
					localStorage.setItem(
						"userCache",
						JSON.stringify({
							userId: res.data.id,
							username: res.data.username,
							token: userCache.token,
						})
					);
				})
				.catch((err) => {
					console.log(err);
					localStorage.removeItem("userCache");
					window.location.href = "/log";
				});
		}
	}, []);

	return <></>;
};
