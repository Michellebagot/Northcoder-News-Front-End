import { useEffect, useState } from "react";
import { getArticles } from "../../utils/app";
import ArticleCard from "../ArticleCard/ArticleCard";
import ArticleCardExt from "../ArticleCardExtended/ArticleCardExt";
import "./ArticlesList.css";
import Loading from "../Loading/Loading";
import { Link, useSearchParams } from "react-router-dom";
import FilterBar from "../FilterBar/FilterBar";
import NotFound from "../NotFound/NotFound";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");
  const [errorOccured, setErrorOccured] = useState(false);
  const [sortByComments, setSortByComments] = useState(false);

  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    setLoadingState(true);
    getArticles(topic, sortBy, orderBy)
      .then((response) => {
        if (sortBy === "comment_count" && orderBy === 'desc') {
              setArticleList(response.sort((a, b) => b.comment_count - a.comment_count))
              setSortByComments(false)
              setLoadingState(false);
            }else  if (sortBy === "comment_count" && orderBy === 'asc'){
              setArticleList(response.sort((a, b) => a.comment_count - b.comment_count))
          setSortByComments(false)
          setLoadingState(false);
  } else {
          setArticleList(response);
          setLoadingState(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoadingState(false);
        if (error.status === 404) {
          setErrorOccured(true);
        }
      });
  }, [sortBy, orderBy, errorOccured]);

  if (errorOccured) {
    return <NotFound />;
  } else if (loadingState) {
    return <Loading />;
  } else {
    if (selectedArticleId !== "") {
      return <ArticleCardExt article_id={selectedArticleId} />;
    } else {
      return (
        <section className="articles-list">
          <FilterBar
            setSortBy={setSortBy}
            sortBy={sortBy}
            setOrderBy={setOrderBy}
            orderBy={orderBy}
          />
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
        </section>
      );
    }
  }
};

export default ArticleList;
