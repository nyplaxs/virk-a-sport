import React, { useState } from 'react';

const Comment = ({ username, content, postedAt, onDelete }) => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => setLikes(likes + 1);

    return (
        <div className="comment">
            <h4>{username}</h4>
            <p>{content}</p>
            <small>{new Date(postedAt).toLocaleTimeString()}</small>
            <div className="comment-actions">
                <button onClick={handleLike}>👍 {likes}</button>
                <button onClick={onDelete}>🗑 Supprimer</button>
            </div>
        </div>
    );
};

export default Comment;
