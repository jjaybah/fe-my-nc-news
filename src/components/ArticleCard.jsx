import formatCustomDate, { useAuthorDisplayName } from "../utils/utils";
import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const ArticleCard = ({ article }) => {
  const { user } = useContext(UserContext);
  const author = useAuthorDisplayName(article.author, user);

  const formattedDate = formatCustomDate(article.created_at);
  return (
    <Link to={`/articles/${article.article_id}`} className="article__link">
      <div className="card__container">
        <img src={article.article_img_url} alt="" />
        <p>{article.topic}</p>
        <h3>{article.title}</h3>
        <p>{formattedDate}</p>
        <p>by {author}</p>
        <p>{article.comment_count} comments</p>
        <p>{article.votes} votes</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
