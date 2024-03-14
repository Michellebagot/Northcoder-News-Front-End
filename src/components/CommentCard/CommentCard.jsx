import { useEffect, useState } from "react";
import "./CommentCard.css";
import moment from "moment";
import { deleteComment } from "../../utils/app";

const CommentCard = ({ comment, currentUser }) => {
  const [showDeleteButton, setShowDeleteButton] = useState(true);
  const [deletedComment, setDeletedComment] = useState(false);

  useEffect(() => {
    if (currentUser === comment.author) {
      setShowDeleteButton(false);
    }
  }, []);

  const handleSubmit = () => {
    deleteComment(comment.comment_id).then((data) => {
      if (data === 204) {
        setDeletedComment(true);
      }
    });
  };

  if (deletedComment) {
    return (
      <li className="commentContainer">
        <h3>This comment has been deleted</h3>
      </li>
    );
  }

  return (
    <>
      <li className="commentContainer">
        <h3>{comment.author} commented on this article.</h3>
        <p>{comment.body}</p>
        <p>votes: {comment.votes}</p>
        <p>{moment(comment.created_at).format("MMMM Do YYYY, h:mm a")}</p>
        <button
          hidden={showDeleteButton}
          onClick={() => {
            handleSubmit();
          }}
        >
          Delete This Comment
        </button>
      </li>
    </>
  );
};

export default CommentCard;
