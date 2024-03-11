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
