import moment from "moment";
const CommentLine = ({ comment }) => {
  return (
    <div className="comment__card">
      <div className="comment__header">
        <span className="comment__author">{comment.author}</span>
        <span className="comment__created">
          {moment(comment.created_at).format("DD MMM, YYYY HH:mm")}
        </span>
      </div>
      <p className="comment__body">{comment.body}</p>
      <div className="comment__footer">
        <span className="comment__votes">{comment.votes} 👍 </span>
      </div>
    </div>
  );
};

export default CommentLine;
