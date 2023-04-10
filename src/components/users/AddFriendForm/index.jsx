import React, { useState } from "react";

const AddFriendForm = ({ socket }) => {
    const [username, setUsername] = useState("");

    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.trim() === "") {
            return;
        }

        const friendRequest = {
            receiverId: username.trim(),
        };

        socket.emit("friend_request", friendRequest);
        setUsername("");
    };

    useState(() => {
        
        socket.on("friend_request", (data) => {
            console.log(data);
        });
    }, []);
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter an id"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Add friend</button>
            </form>
        </div>
    );
};

export default AddFriendForm;
