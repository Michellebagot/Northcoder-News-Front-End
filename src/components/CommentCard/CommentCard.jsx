import "./CommentCard.css";
import moment from "moment";

const CommentCard = (comment) => {
  return (
    <>
      <li className="commentContainer">
        <h3>{comment.comment.author} commented on this article.</h3>
        <p>{comment.comment.body}</p>
        <p>votes: {comment.comment.votes}</p>
        <p>{moment(comment.comment.created_at).format('MMMM Do YYYY, h:mm a')}</p>
      </li>
    </>
  );
};

export default CommentCard;

