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
