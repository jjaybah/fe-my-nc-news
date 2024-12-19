import { useContext, useEffect, useState } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "../contexts/userContext";

export const AddCommentHandler = ({ article_id, setComments, comments }) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, comment, user).then(({ data }) => {
      setComments([data.comment, ...comments]);
      setComment("");
    });
  };

  return (
    <form className="add-comment-form" onSubmit={handleSubmit}>
      <label className="add-comment-label">
        Add comment
        <input
          type="text"
          value={comment}
          onChange={handleChange}
          className="add-comment-input"
        ></input>
      </label>
      <button type="submit">Post</button>
    </form>
  );
};
