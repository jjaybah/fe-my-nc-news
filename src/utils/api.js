import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://my-nc-news-uzz7.onrender.com/api/",
});

export const fetchArticles = async (topic) => {
  let url = "/articles";
  if (topic) {
    url = `/articles?topic=${topic}`;
  }
  console.log(url, "url");

  const articles = await ncNewsApi.get(url);
  console.log(articles, "articles in api");
  return articles.data.articles;
};
