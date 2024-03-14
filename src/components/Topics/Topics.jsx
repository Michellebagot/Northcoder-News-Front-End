import { useState, useEffect } from "react";
import { getTopics } from "../../utils/app";
import TopicCard from "../TopicCard/TopicCard";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const Topics = () => {
  const [topicList, setTopicList] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  const params = useParams();
  console.log(params);

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
      <>
        <h6>This is the topic list</h6>

        <ul className="cardUL">
          {topicList.map((topic) => {
            return (
              <Link to={`/articles?topic=${topic.slug}`} key={topic.slug}>
                <TopicCard topic={topic} />
              </Link>
            );
          })}
        </ul>
      </>
    );
  }
};

export default Topics;
