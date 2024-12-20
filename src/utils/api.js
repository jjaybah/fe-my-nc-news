import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://my-nc-news-uzz7.onrender.com/api/",
});

export const fetchArticles = async (topic, sort_by) => {
  const articles = await ncNewsApi.get("/articles", {
    params: { topic: topic, sort_by: sort_by },
  });
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

export const updateArticleByArticleId = async (article_id, vote) => {
  await ncNewsApi.patch(`/articles/${article_id}`, { inc_votes: vote });
};

export const postComment = async (article_id, comment, { username }) => {
  if (comment.trim()) {
    const newComment = await ncNewsApi.post(
      `/articles/${article_id}/comments`,
      {
        username: username,
        body: comment,
      }
    );
    return newComment;
  }
};

export const deleteCommentById = async (comment_id) => {
  await ncNewsApi.delete(`/comments/${comment_id}`);
  console.log("comment deleted");
};
