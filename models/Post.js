import React, { useState } from 'react';

const Post = ({ username, content, image, createdAt, likesCount, comments }) => {
    const [likes, setLikes] = useState(likesCount || 0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setLikes(isLiked ? likes - 1 : likes + 1);
        setIsLiked(!isLiked);
    };

    return (
        <div className="post">
            <h4>{username}</h4>
            <p>{content}</p>
            {image && <img src={image} alt="Post content" />}
            <small>{new Date(createdAt).toLocaleDateString()}</small>
            <div className="post-actions">
                <button onClick={handleLike}>
                    {isLiked ? '💔 Unlike' : '❤️ Like'} ({likes})
                </button>
                <span>💬 {comments.length} commentaires</span>
            </div>
        </div>
    );
};

export default Post;
