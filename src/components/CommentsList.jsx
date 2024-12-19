import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils/api";
import CommentLine from "./CommentLine";
import { AddCommentHandler } from "./AddCommentHandler";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    if (!article_id) return;

    setIsLoading(true);
    fetchCommentsByArticleId(article_id).then((comments) => {
      setIsLoading(false);
      setComments(comments);
      setIsDeleted(false);
    });
  }, [article_id, isDeleted]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section>
      <AddCommentHandler
        article_id={article_id}
        setComments={setComments}
        comments={comments}
      />
      <ul className="comments__container">
        {comments.map((comment) => {
          return (
            <CommentLine
              key={comment.comment_id}
              comment={comment}
              setIsDeleted={setIsDeleted}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default CommentsList;
