import { useEffect, useState } from "react";
import "./MakeComment.css";
import { postComment } from "../../utils/app";
import { useParams } from "react-router-dom";
import CommentCard from "../CommentCard/CommentCard";

const MakeComment = ({ currentUser }) => {
  const params = useParams();
  const article_id = params.article_id;

  const [makeCommentState, setMakeCommentState] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const [commentComplete, setCommentComplete] = useState(false);
  const [addedComment, setAddedComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCommentComplete(true);
    postNewComment(article_id, currentUser, commentBody);
  };

  const postNewComment = (article_id, userName, commentBody) => {
    const newComment = {
      article_id: article_id,
      userName: userName,
      body: commentBody,
    };

    postComment(newComment).then((response) => {
      setAddedComment(response);
      setCommentBody("");
    });
  };

  if (commentComplete) {
    return (
      <>
        <section className="madeCommentContainer">
          <h3> Your comment has been added. Thank you</h3>
        </section>
        <section>
          <CommentCard
            className="commentContainer"
            key={addedComment.comment_id}
            comment={addedComment}
          />
        </section>
      </>
    );
  }

  if (!makeCommentState) {
    return (
      <section //make a button and style
        className="makeCommentContainer"
        onClick={() => {
          setMakeCommentState(true);
        }}
      >
        <h3> Add A Comment</h3>
      </section>
    );
  } else {
    return (
      <section className="makingCommentContainer">
        <p>You are logged in as {currentUser}</p>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="commentBox">Add a Comment</label> */}
          <textarea
            type="text"
            className="text-box"
            id="commentBox"
            value={commentBody}
            onChange={(event) => {
              setCommentBody(event.target.value);
            }}
            required
          />
          <br></br>
          <button>Submit Your Comment</button>
        </form>
      </section>
    );
  }
};

export default MakeComment;
