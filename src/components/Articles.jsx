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
  const [order, setOrder] = useState(searchParams.get("order") || "desc");

  const handleChange = (e) => {
    const sort = e.target.value.split(",")[0];
    const order = e.target.value.split(",")[1];
    setSortBy(sort);
    setOrder(order);
    setSearchParams({ sort_by: sort, order: order });
  };
  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic, sort_by, order)
      .then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsErr(true);
        console.log(err);
      });
  }, [topic, sort_by, order]);

  return isErr ? (
    <p>Error loading articles. Please try again later.</p>
  ) : isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <h1 className="articles__title">Recent Articles</h1>
      <div className="articles__grid">
        <label htmlFor="sortBy">Sort articles</label>
        <select
          name="sort_by"
          value={`${sort_by},${order}`}
          onChange={handleChange}
          className="sort__articles__dropdown"
        >
          <option value="created_at,desc">{`Date (Newest First)`}</option>
          <option value="created_at,asc">{`Date (Oldest First)`}</option>
          <option value="votes,desc">{`Votes (High to Low)`}</option>
          <option value="votes,asc">{`Votes (Low to High)`}</option>
          <option value="comment_count,desc">
            {`Comment count (Hight to Low)`}
          </option>
          <option value="comment_count,asc">
            {`Comment count (Low to High)`}
          </option>
        </select>
      </div>
      <ArticlesList articles={articles} />
    </>
  );
}

export default Articles;
