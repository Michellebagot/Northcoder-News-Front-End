import axios from "axios";

const api = axios.create({
  baseURL: `https://nc-wk7-nc-news.onrender.com`,
});

export const getArticles = () => {
  return api
    .get(`/api/articles`)
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
