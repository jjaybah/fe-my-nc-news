import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
import ArticlesList from "./ArticlesList";
import { useParams, useSearchParams } from "react-router";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort_by, setSortBy] = useState(
    searchParams.get("sort_by") || "created_at"
  );

  const handleChange = (e) => {
    setSortBy(e.target.value);
    setSearchParams({ sort_by: e.target.value });
  };
  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic, sort_by)
      .then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsErr(true);
        console.log(err);
      });
  }, [topic, sort_by]);

  return isErr ? (
    <p>Error loading articles. Please try again later.</p>
  ) : isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <h1 className="articles__title">Recent Articles</h1>
      <label htmlFor="sortBy">Sort articles</label>
      <select name="sort_by" value={sort_by} onChange={handleChange}>
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comment count</option>
      </select>
      <ArticlesList articles={articles} />
    </>
  );
}

export default Articles;
