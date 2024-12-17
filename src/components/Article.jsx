import { Link, useParams } from "react-router";
import { fetchArticleById } from "../utils/api";
import { useEffect, useState } from "react";
import moment from "moment";

const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <div className="article__container">
      <h1>{article.title}</h1>
      <Link className="header__tag" to={`/articles?topic=${article.topic}`}>
        <p className="tag">{article.topic}</p>
      </Link>
      <div className="article__header">
        <p>
          By <span className="author">{article.author}</span>
        </p>
        <p className="created__at">
          {moment(article.created_at).format("DD MMMM, HH:mm")}
        </p>
      </div>
      <img src={article.article_img_url} alt="" />
      <p className="article__body">{article.body}</p>
      <div className="article__footer">
        <p>{article.comment_count} comments</p>
        <p>{article.votes} votes</p>
      </div>
    </div>
  );
};

export default Article;
