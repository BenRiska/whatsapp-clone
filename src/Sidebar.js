import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import React, { useState, useEffect } from "react";
import db from "./firebase";
import SidebarChat from "./SidebarChat";
import { useStateValue } from "./StateProvider";

import "./Sidebar.css";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [seed, setSeed] = useState("");
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    db.collection("rooms").onSnapshot((snap) => {
      setRooms(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat addNewChat={true} />
        {rooms.map((room) => (
          <SidebarChat
            key={room.id}
            id={room.id}
            name={room.name}
            addNewChat={false}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
