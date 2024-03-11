import { useEffect, useState } from "react";
import { getArticles } from "../../utils/app";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticlesList.css";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getArticles()
      .then((response) => {
        setArticleList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h6>This is the article list</h6>

      <ul className="cardUL">
        {articleList.map((article) => {
          return <ArticleCard key={article.title} article={article} />;
        })}
      </ul>
    </>
  );
};

export default ArticleList;
