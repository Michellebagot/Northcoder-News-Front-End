import { useState, useEffect } from "react";
import { getTopics } from "../../utils/app";
import TopicCard from "../TopicCard/TopicCard";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./Topics.css";

const Topics = () => {
  const [topicList, setTopicList] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(false);
    getTopics()
      .then((response) => {
        setTopicList(response);
        setLoadingState(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loadingState === false) {
    return <Loading />;
  } else {
    return (
      <section className="topics-section">
        <ul className="cardUL">
          {topicList.map((topic) => {
            return (
              <Link to={`/articles?topic=${topic.slug}`} key={topic.slug}>
                <TopicCard topic={topic} />
              </Link>
            );
          })}
        </ul>
      </section>
    );
  }
};

export default Topics;
