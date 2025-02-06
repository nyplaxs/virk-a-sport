import React from 'react';

const User = ({ avatar, username, bio, followers, following }) => {
    return (
        <div className="user-profile">
            <img src={avatar} alt={`${username}'s avatar`} className="avatar" />
            <h3>{username}</h3>
            <p>{bio}</p>
            <div className="user-stats">
                <span>👥 {followers} abonnés</span>
                <span>📖 {following} suivis</span>
            </div>
        </div>
    );
};

export default User;
