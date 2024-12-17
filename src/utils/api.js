import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://my-nc-news-uzz7.onrender.com/api/",
});

export const fetchArticles = async (topic) => {
  let url = "/articles";
  if (topic) {
    url = `/articles?topic=${topic}`;
  }

  const articles = await ncNewsApi.get(url);
  return articles.data.articles;
};

export const fetchArticleById = async (article_id) => {
  const article = await ncNewsApi.get(`/articles/${article_id}`);
  return article.data.article;
};

export const fetchCommentsByArticleId = async (article_id) => {
  const comments = await ncNewsApi.get(`/articles/${article_id}/comments`);
  return comments.data.comments;
};
