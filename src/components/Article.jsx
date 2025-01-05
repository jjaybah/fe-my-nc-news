import { useParams } from "react-router";
import { fetchArticleById } from "../utils/api";
import { useContext, useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import moment from "moment";
import { useAuthorDisplayName } from "../utils/utils";
import { UserContext } from "../contexts/UserContext";
import { VotesHandler } from "./VotesHandler";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const { article_id } = useParams();
  const { user } = useContext(UserContext);
  const author = useAuthorDisplayName(article.author || "", user);
  const [commentCount, setCommentCount] = useState(article.comment_count || 0);

  const updateCommentCount = (newCount) => {
    setCommentCount((currCount) => currCount + newCount);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setCommentCount(fetchedArticle.comment_count);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(err);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isError) {
    return (
      <div className="err__wrapper">
        <p className="err__status">{isError.response?.status}</p>
        <p className="err__msg">
          {isError.response?.data?.msg || "An error occurred"}
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="article__container">
      <h1>{article.title}</h1>
      <p className="tag">{article.topic}</p>
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
        <p>{commentCount} comments</p>
        <VotesHandler article_id={article.article_id} votes={article.votes} />
      </div>
      <CommentsList
        article_id={article.article_id}
        updateCommentCount={updateCommentCount}
        key={article.article_id}
      />
    </div>
  );
};

export default Article;
