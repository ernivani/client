import React, { useState, useEffect } from "react";


const AddFriendForm = ({ socket }) => {
    const [username, setUsername] = useState("");
    const [friendRequests, setFriendRequests] = useState([]);
    const [friends, setFriends] = useState([]);
    const userCache = localStorage.getItem('userCache')
    const id = JSON.parse(userCache).userId;


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

    useEffect(() => {
        
        // Get the list of friends requests and set it to the state
        socket.emit("get_friend_request");
        socket.on("friend_requests", (data) => {
            setFriendRequests(data);
            console.log(data);
        });
        socket.on("friends_list", (data) => {
            setFriends(data);
            console.log(data);
        });
        
        socket.on("friend_request_received", (data) => {
            console.log(data);
            setFriendRequests((friendRequests) => [...friendRequests, data]);
        });


        // When a friend request is accepted, remove it from the list and update the list of friends
        socket.on("friend_request_accepted", (data) => {
            socket.emit("get_friend_request");
            console.log(data);
        });
    
        // When a friend request is declined, remove it from the list
        socket.on("friend_request_declined", (data) => {
            console.log(data);
            socket.emit("get_friend_request");
        });

        socket.on("friend_request_canceled", (data) => {
            console.log(data);
            setFriendRequests((friendRequests) =>
                friendRequests.filter((friendRequest) => friendRequest.user_id1 !== data.senderId)
            );
        });

    }, [socket]);

    const getDisplayUserId = (friendship) => {
        console.log(friendship.user_id1 + " " + id);
        return friendship.user_id1 === id ? friendship.user_id2 : friendship.user_id1;
    };
    
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
            <div>
                <h3>Friend Requests</h3>
                {friendRequests.map((friendRequest) => (
                    <div key={getDisplayUserId(friendRequest)}>
                        <p>{getDisplayUserId(friendRequest)}</p>
                        <p>{friendRequest.status}</p>
                        {friendRequest.user_id1 === id ? (
                            <button onClick={() => socket.emit("cancel_friend_request", {senderId: friendRequest.user_id1, receiverId: friendRequest.user_id2})}>Cancel</button>
                            ) : (
                            <>
                                <button onClick={() => socket.emit("accept_friend_request", {senderId: friendRequest.user_id1})}>Accept</button>
                                <button onClick={() => socket.emit("decline_friend_request", {senderId: friendRequest.user_id1})}>Decline</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div>
                <h3>Friends</h3>
                {friends.map((friend) => (
                    <div key={getDisplayUserId(friend)}>
                        <p>{getDisplayUserId(friend)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddFriendForm;
