import { useContext, useState } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";

export const AddCommentHandler = ({
  article_id,
  setComments,
  comments,
  updateCommentCount,
}) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [isError, setIsError] = useState(null);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, comment, user)
      .then(({ data }) => {
        setComments([data.comment, ...comments]);
        setComment("");
        updateCommentCount(1);
      })
      .catch((err) => {
        alert("Failed to post the comment. Please try again later.");
      });
  };

  return (
    <form
      className="add-comment-form"
      onSubmit={handleSubmit}
      id="add-comment-form"
    >
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
