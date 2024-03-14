import { useEffect, useState } from "react";
import {
  getArticleById,
  getCommentsByArticleId,
  voteOnArticle,
} from "../../utils/app";
import CommentCard from "../CommentCard/CommentCard";
import Loading from "../Loading/Loading";
import "./ArticleCardExt.css";
import moment from "moment";
import MakeComment from "../MakeComment/MakeComment";
import { useParams } from "react-router-dom";

const ArticleCardExt = ({ article_id }) => {
  const [currentArticle, setCurrentArticle] = useState({ article_id });
  const [articleComments, setArticleComments] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [currentUser, setCurrentUser] = useState("jessjelly");
  const params = useParams();

  useEffect(() => {
    setLoadingState(false);
    getArticleById(params.article_id)
      .then((response) => {
        setCurrentArticle(response[0]);
        setLoadingState(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setLoadingState(false);
    getCommentsByArticleId(params.article_id)
      .then((response) => {
        setArticleComments(response);
        setLoadingState(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const voteUp = () => {
    setCurrentArticle((currArticle) => ({
      ...currArticle,
      votes: currArticle.votes + 1,
    }));

    voteOnArticle(params.article_id, { inc_votes: 1 }).catch((error) => {
      setCurrentArticle((currArticle) => ({
        ...currArticle,
        votes: currArticle.votes - 1,
      }));
    });
  };

  const voteDown = () => {
    setCurrentArticle((currArticle) => ({
      ...currArticle,
      votes: currArticle.votes - 1,
    }));

    voteOnArticle(params.article_id, { inc_votes: -1 }).catch((error) => {
      setCurrentArticle((currArticle) => ({
        ...currArticle,
        votes: currArticle.votes + 1,
      }));
    });
  };

  if (loadingState === false) {
    return <Loading />;
  } else {
    return (
      <>
        <h1>This is an extended article card</h1>
        <section className="extArticleContainer">
          <h3>{currentArticle.title}</h3>
          <h4>{currentArticle.topic}</h4>
          <img src={currentArticle.article_img_url} />
          <p>{currentArticle.body}</p>
          <p>{currentArticle.author}</p>
          <p>Votes: {currentArticle.votes}</p>
          <button
            className="votingButton"
            onClick={() => {
              voteDown();
            }}
          >
            👎
          </button>
          <button
            className="votingButton"
            onClick={() => {
              voteUp();
            }}
          >
            👍
          </button>{" "}
          <p>
            {moment(currentArticle.created_at).format(
              "MMMM Do YYYY, h:mm:ss a"
            )}
          </p>
        </section>
        <section>
          <MakeComment currentUser={currentUser} />
        </section>
        <section>
          <ul>
            {articleComments.map((comment) => {
              return (
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                  currentUser={currentUser}
                />
              );
            })}
          </ul>
        </section>
      </>
    );
  }
};

export default ArticleCardExt;
