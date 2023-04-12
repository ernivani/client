import { FaCaretDown } from "react-icons/fa";
import {
  ChannelsList,
  ChannelsListItem,
  ChannelsListLink,
  ChannelName,
  ServerName
} from "../css";

import { useEffect, useState } from "react";

export default function ServerChannel({ socket, serverId, channelId }) {
  const userCache = localStorage.getItem("userCache");
  const userId = JSON.parse(userCache).userId;
  socket = socket.socket;

  const [channels, setChannels] = useState([]);
  socket.emit("get-channel-by-server", { serverId, userId });

  useEffect(() => {
    socket.on("channel-list", (data) => {
      setChannels(data);
    });
  }, [socket]);

  return (
    <>
      <ServerName>
        <span style={{ margin: "auto 0" }}>Server Name</span>
        <FaCaretDown style={{ fontSize: "12px", margin: "auto 0" }} />
      </ServerName>
      {channels.map((channel) => {
        if (channel.type === "text") {
          return (
            <ChannelsListItem key={channel.id}>
              <ChannelsListLink to={`/channels/${serverId}/${channel.id}`}>
                <ChannelName>#{channel.name}</ChannelName>
              </ChannelsListLink>
            </ChannelsListItem>
          );
        } else if (channel.type === "voice") {
          // Render voice channel
        } else if (channel.type === "category") {
          return (
            <div key={channel.id}>
              {/* Render category title */}
              <h3>{channel.name}</h3>
              <ChannelsList>
                {/* {channel.channels.map((subChannel) => {
                  if (subChannel.type === "text") {
                    return (
                      <ChannelsListItem key={subChannel.id}>
                        <ChannelsListLink
                          to={`/channels/${serverId}/${subChannel.id}`}
                        >
                          <ChannelName>#{subChannel.name}</ChannelName>
                        </ChannelsListLink>
                      </ChannelsListItem>
                    );
                  } else if (subChannel.type === "voice") {
                    // Render voice channel
                  }
                })} */}
              </ChannelsList>
            </div>
          );
        }
      })}
    </>
  );
}
