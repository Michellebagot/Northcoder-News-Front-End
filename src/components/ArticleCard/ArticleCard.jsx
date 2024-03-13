import "./ArticleCard.css";

const ArticleCard = ({ article }) => {


  return (
    <>
      <li
        className="articleCard"
      >
        <h3>{article.title}</h3>
        <h4>Author: {article.author}</h4>
        <img
          src={article.article_img_url}
          alt={`an Image for the article titled ${article.title}`}
        />
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
      </li>
    </>
  );
};

export default ArticleCard;
