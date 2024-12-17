import moment from "moment";
import formatCustomDate from "../utils/utils";
import { Link } from "react-router";

const ArticleCard = ({ article }) => {
  const formattedDate = formatCustomDate(article.created_at);
  return (
    <Link to={`/articles/${article.article_id}`} className="article__link">
      <div className="card__container">
        <img src={article.article_img_url} alt="" />
        <p>{article.topic}</p>
        <h3>{article.title}</h3>
        <p>{formattedDate}</p>
        <p>by {article.author}</p>
        <p>{article.comment_count} comments</p>
        <p>{article.votes} votes</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
