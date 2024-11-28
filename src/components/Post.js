const Post = ({ post, onLike, onComment }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [comment, setComment] = useState('');
  
    const handleLike = () => {
      setIsLiked(!isLiked);
      onLike(post.id, !isLiked); // Vérifiez cette ligne pour des parenthèses
    };
  
    const handleCommentSubmit = (event) => {
      event.preventDefault();
      if (comment.trim()) {
        onComment(post.id, comment); // Vérifiez ici aussi
        setComment('');
      }
    };
  
    return (
      <div className="post">
        <div className="post-header">
          <h3>{post.author}</h3>
          <p>{new Date(post.timestamp).toLocaleString()}</p>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
        </div>
        <div className="post-actions">
          <button className={`like-btn ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
            {isLiked ? 'Unlike' : 'Like'}
          </button>
          <span>{post.likes} likes</span>
        </div>
        <div className="post-comments">
          <form onSubmit={handleCommentSubmit}>
            <textarea
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)} // Vérifiez ici aussi
            ></textarea>
            <button type="submit">Comment</button>
          </form>
          <ul>
            {post.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  