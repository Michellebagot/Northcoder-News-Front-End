import "./TopicCard.css";

const TopicCard = ({ topic }) => {
  return (
    <>
      <li className="topicCard">
        <h3>{topic.slug}</h3>
        <p>{topic.description}</p>
      </li>
    </>
  );
};

export default TopicCard;
