import { useEffect, useState } from "react";
import { getArticles } from "../../utils/app";
import ArticleCard from "../ArticleCard/ArticleCard";
import ArticleCardExt from "../ArticleCardExtended/ArticleCardExt";
import "./ArticlesList.css";
import Loading from "../Loading/Loading";
import { Link, useSearchParams } from "react-router-dom";
import FilterBar from "../FilterBar/FilterBar";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");


  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    setLoadingState(false);
    getArticles(topic, sortBy, orderBy)
      .then((response) => {
        setArticleList(response);
        setLoadingState(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sortBy, orderBy]);

  if (loadingState === false) {
    return <Loading />;
  } else {
    if (selectedArticleId !== "") {
      return <ArticleCardExt article_id={selectedArticleId} />;
    } else {
      return (
        <>
          <FilterBar
            setSortBy={setSortBy}
            sortBy={sortBy}
            setOrderBy={setOrderBy}
            orderBy={orderBy}
          />
          <h6>This is the article list</h6>

          <ul className="cardUL">
            {articleList.map((article) => {
              return (
                <Link
                  to={`/articles/${article.article_id}`}
                  key={article.title}
                >
                  <ArticleCard
                    article={article}
                    setSelectedArticleId={setSelectedArticleId}
                  />
                </Link>
              );
            })}
          </ul>
        </>
      );
    }
  }
};

export default ArticleList;
