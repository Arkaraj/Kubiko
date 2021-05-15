import React, { useState } from "react";
import Poll from "@gidesan/react-polls";

const Polls = (props) => {
  const id = props.match.params.pollId;

  const { poll } = props.location.state;

  const pollQuestion = poll.question;

  const pollAnswers = poll.options.map((opt) => {
    return { option: opt.option, votes: opt.clicked };
  });

  const [pollAnswer, setPollAnswer] = useState([...pollAnswers]);
  const [result, setResult] = useState(null);

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswer.map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });
    setResult(voteAnswer);
    setPollAnswer([...newPollAnswers]);
  };

  return (
    <div className="poll">
      <h4>Title: {poll.title}</h4>
      <Poll
        customStyles={{
          questionSeparator: false,
          questionSeparatorWidth: "question",
          questionBold: false,
          questionColor: "#ff8f07",
          align: "center",
          theme: "cyan",
        }}
        noStorage={true}
        question={pollQuestion}
        answers={pollAnswer}
        vote={result}
        onVote={handleVote}
      />
    </div>
  );
};

export default Polls;
