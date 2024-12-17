import moment from "moment";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export default function formatCustomDate(timestamp) {
  const date = moment(timestamp);
  const now = moment();

  if (date.isSame(now, "day")) {
    return date.fromNow();
  } else if (date.isSame(now.clone().subtract(1, "day"), "day")) {
    return "Yesterday";
  } else {
    return date.format("MMM D, YYYY");
  }
}

export const useAuthorDisplayName = (articleAuthor, currentUser) => {
  return articleAuthor === currentUser.username ? "You" : articleAuthor;
};
