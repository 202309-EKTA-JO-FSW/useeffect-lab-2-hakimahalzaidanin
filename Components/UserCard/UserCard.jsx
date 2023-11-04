/** @format */

import React from "react";

export default function UserCard({ userData }) {
  if (!userData) {
    return null;
  }

  return (
    <div className="user-card">
      <div>
        <img
          src={userData.avatar_url}
          alt="avatar"
        />
      </div>
      <div>
        <h5> Name:{userData.name}</h5>

        <p> Username:{userData.login}</p>
      </div>
    </div>
  );
}
