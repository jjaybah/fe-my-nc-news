function DeleteComment({ comment_id, onDelete }) {
  function handleDelete() {
    if (confirm("Are you sure you want to delete this comment?")) {
      onDelete(comment_id);
    }
  }

  return (
    <button className="comment__delete" onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteComment;
