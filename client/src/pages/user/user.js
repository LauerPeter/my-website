

import React from "react";
import { useAuthState } from '../../context/authContext';

function UserProfile() {
  const { Uname } = useAuthState(); 
  const savedGames = JSON.parse(localStorage.getItem('savedGames')) || [];
  return (
    <div className="container">
    <h2>{Uname}'s Profile</h2>
    <h3>Saved Games</h3>
    <ul>
      {savedGames.map((gameId) => (
        <li key={gameId}>Game ID: {gameId}</li>
      ))}
    </ul>
  </div>
);
}

export default UserProfile;