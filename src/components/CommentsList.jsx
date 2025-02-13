import { useEffect, useState } from "react";
import { fetchCommentsByArticleId, deleteCommentById } from "../utils/api";
import CommentLine from "./CommentLine";
import { AddCommentHandler } from "./AddCommentHandler";
import Loading from "./Loading";

const CommentsList = ({ article_id, updateCommentCount }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const handleDelete = (comment_id) => {
    const originalComments = [...comments];

    setComments((currComments) =>
      currComments.filter((comment) => comment.comment_id !== comment_id)
    );
    updateCommentCount(-1);

    deleteCommentById(comment_id).catch(() => {
      alert("Failed to delete the comment. Please try again.");
      setComments(originalComments);
      updateCommentCount(1);
    });
  };

  useEffect(() => {
    if (!article_id) return;

    setIsLoading(true);
    setIsError(null);

    fetchCommentsByArticleId(article_id)
      .then((comments) => {
        setIsLoading(false);
        setComments(comments);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError("Failed to fetch comments. Please try again later.");
        console.error(err);
      });
  }, [article_id]);

  if (isLoading) return <Loading />;

  if (isError) return <p className="error">{isError}</p>;

  return (
    <section>
      <AddCommentHandler
        article_id={article_id}
        setComments={setComments}
        comments={comments}
        updateCommentCount={updateCommentCount}
      />
      <ul className="comments__container">
        {comments.map((comment) => (
          <CommentLine
            key={comment.comment_id}
            comment={comment}
            onDelete={handleDelete}
            updateCommentCount={updateCommentCount}
          />
        ))}
      </ul>
    </section>
  );
};

export default CommentsList;
