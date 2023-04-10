import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            socket.emit("get_friend_request");
        });


        // When a friend request is accepted, remove it from the list and update the list of friends
        socket.on("friend_request_accepted", (data) => {
            socket.emit("get_friend_request");
            console.log(data);
        });
    
        // When a friend request is declined, remove it from the list
        socket.on("friend_request_declined", (data) => {
            console.log("friend_request_declined", data);
            socket.emit("get_friend_request");
        });

        socket.on("friend_request_canceled", (data) => {
            console.log(data);
            socket.emit("get_friend_request");
        });

    }, [socket]);

    const getDisplayUserId = (friendship) => {
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
                        {friendRequest.user_id1 === id ? ( <p>{friendRequest.username2}</p> ) : ( <p>{friendRequest.username1}</p> )}
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
                        {/* {friend.user_id1 === id ? ( <p>{friend.username2}</p> ) : ( <p>{friend.username1}</p> )} */}
                        {friend.user_id1 === id ? ( <Link to={`/channels/@me/${friend.user_id2}`}>{friend.username2}</Link> ) : ( <Link to={`/channels/@me/${friend.user_id1}`}>{friend.username1}</Link> )}
                        <button onClick={() => socket.emit("remove_friend", {friendId: getDisplayUserId(friend)})}>Remove</button>
                    </div>
                ))}
            </div>
            <p>
                votre id est : {id}
            </p>
        </div>
    );
};

export default AddFriendForm;
