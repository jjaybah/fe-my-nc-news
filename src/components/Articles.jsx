import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
import ArticlesList from "./ArticlesList";
import { useSearchParams } from "react-router";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic)
      .then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsErr(true);
        console.log(err);
      });
  }, [topic]);

  return isLoading ? (
    isErr ? (
      <p>Loading...</p>
    ) : (
      <p>Error</p>
    )
  ) : (
    <>
      <ArticlesList articles={articles} />
    </>
  );
}

export default Articles;