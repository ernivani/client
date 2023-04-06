import axios from "axios";
import { useEffect } from "react";

export const CheckAuth = () => {

    // const userCache = JSON.parse(localStorage.getItem("userCache"));

    useEffect(() => {
        let userCache = null;
        try {
            userCache = JSON.parse(localStorage.getItem("userCache"));
        }
        catch (e) {
            localStorage.removeItem("userCache");
            window.location.href = '/log';
        }


        if (userCache !== null) {
            console.log(userCache);
            axios
                .post("https://api.impin.fr/user/token", {
                    uid: userCache.userId,
                    token: userCache.token,
                })
                .then((res) => {
                    // console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                    localStorage.removeItem("userCache");
                    window.location.href = '/log';
                });
        }
    }, []);

    return <></>;
};
