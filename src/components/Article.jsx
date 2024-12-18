import { Link, useParams } from "react-router";
import { fetchArticleById } from "../utils/api";
import { useContext, useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import moment from "moment";
import { useAuthorDisplayName } from "../utils/utils";
import { UserContext } from "../contexts/userContext";
import { VotesHandler } from "./VotesHandler";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();
  const { user } = useContext(UserContext);
  const author = useAuthorDisplayName(article.author, user);

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id).then((article) => {
      setIsLoading(false);
      setArticle(article);
    });
  }, [article_id]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="article__container">
      <h1>{article.title}</h1>
      <Link className="header__tag" to={`/articles?topic=${article.topic}`}>
        <p className="tag">{article.topic}</p>
      </Link>
      <div className="article__header">
        <p>
          By <span className="author">{author}</span>
        </p>
        <p className="created__at">
          {moment(article.created_at).format("DD MMMM, HH:mm")}
        </p>
      </div>
      <img src={article.article_img_url} alt="" />
      <p className="article__body">{article.body}</p>
      <div className="article__footer">
        <p>{article.comment_count} comments</p>
        <VotesHandler article_id={article.article_id} votes={article.votes} />
      </div>
      <CommentsList article_id={article.article_id} key={article.article_id} />
    </div>
  );
};

export default Article;
