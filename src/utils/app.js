import axios from "axios";

const api = axios.create({
  baseURL: `https://nc-wk7-nc-news.onrender.com`,
});

export const getArticles = (topic) => {
  return api
    .get(`/api/articles`, {
      params: { topic: topic },
    })
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getArticleById = (article_id) => {
  return api
    .get(`/api/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCommentsByArticleId = (article_id) => {
  return api
    .get(`/api/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const voteOnArticle = (article_id, votes) => {
  return api.patch(`/api/articles/${article_id}`, votes).then((response) => {
    return response.data.article;
  });
};

export const postComment = ({ article_id, userName, body }) => {
  return api
    .post(`/api/articles/${article_id}/comments`, {
      username: userName,
      body: body,
    })
    .then((response) => {
      return response.data.comment;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteComment = (comment_id) => {
  return api.delete(`/api/comments/${comment_id}`).then((response) => {
    return response.status;
  });
};

export const getTopics = () => {
  return api.get(`/api/topics`).then((response) => {
    return response.data.topics;
  });
};
