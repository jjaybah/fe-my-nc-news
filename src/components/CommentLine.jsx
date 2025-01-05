import moment from "moment";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useAuthorDisplayName } from "../utils/utils";
import DeleteComment from "./DeleteComment";

const CommentLine = ({ comment, onDelete }) => {
  const { user } = useContext(UserContext);
  const author = useAuthorDisplayName(comment.author, user);

  return (
    <div className="comment__card">
      <div className="comment__header">
        <span className="comment__author">{author}</span>
        <span className="comment__created">
          {moment(comment.created_at).format("DD MMM, YYYY HH:mm")}
        </span>
      </div>
      <p className="comment__body">{comment.body}</p>
      <div className="comment__footer">
        <span className="comment__votes">{comment.votes} 👍 </span>
        {user.username === comment.author ? (
          <DeleteComment comment_id={comment.comment_id} onDelete={onDelete} />
        ) : null}
      </div>
    </div>
  );
};

export default CommentLine;
