import { useEffect, useState } from "react";
import { updateArticleByArticleId } from "../utils/api";
import voteUp from "../assets/arrow-up.png";
import voteDown from "../assets/arrow-down.png";

export const VotesHandler = ({ article_id, votes }) => {
  const [votesCount, setVotesCount] = useState(0);
  const [isErr, setIsErr] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    setVotesCount(votes);
  }, []);

  const handleClick = (e) => {
    // determine a value to be increased or decreased
    const incVotes = +e.target.name;
    if (!hasVoted) {
      setHasVoted(true);

      // display +-1 on the page
      setVotesCount((currVotesCount) => {
        return currVotesCount + incVotes;
      });
      setIsErr(false);

      // set new votes count and set request to api
      updateArticleByArticleId(article_id, incVotes).catch((err) => {
        // if error from api display previous votes state
        setVotesCount((currVotesCount) => currVotesCount - incVotes);
        setIsErr("Your vote was not successfull. Try again!");
      });
    }
  };

  return (
    <span className="article__votes">
      <button className="button__vote" onClick={handleClick} name="+1">
        +
        {/* <img
          src={voteUp}
          alt="arrow up to add votes"
          onClick={handleClick}
          name="+1"
        /> */}
      </button>
      <span>{votesCount}</span>
      <button className="button__vote" onClick={handleClick} name="-1">
        -
        {/* <img
          src={voteDown}
          alt="arrow down to reduce votes"
          onClick={handleClick}
          name="-1"
        /> */}
      </button>
      {isErr ? <p>{isErr}</p> : null}
    </span>
  );
};
