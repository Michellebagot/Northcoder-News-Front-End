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

const ArticleCardExt = ({ article_id }) => {
  const [currentArticle, setCurrentArticle] = useState({ article_id });
  const [articleComments, setArticleComments] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(false);
    getArticleById(article_id)
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
    getCommentsByArticleId(article_id)
      .then((response) => {
        setArticleComments(response);
        setLoadingState(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentArticle]);

  const voteUp = () => {
    voteOnArticle(article_id, { inc_votes: 1 }).then((response) => {
      setCurrentArticle(response);
    });
  };

  const voteDown = () => {
    voteOnArticle(article_id, { inc_votes: -1 }).then((response) => {
      setCurrentArticle(response);
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
          <p>{moment(currentArticle.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
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
          </button>
        </section>
        <section>
          <ul>
            {articleComments.map((comment) => {
              return <CommentCard key={comment.comment_id} comment={comment} />;
            })}
          </ul>
        </section>
      </>
    );
  }
};

export default ArticleCardExt;
