import React from "react";

function Player({ avatarUrl, name }) {
  return (
    <div className="user">
      <span>{name}</span>
      <img className="avatar" src= {avatarUrl} alt="Player" />
    </div>
  );
}

export default Player;
