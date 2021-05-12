import React, { useState } from "react";
import Poll from "@gidesan/react-polls";

const Polls = () => {
  const pollQuestion = "How was the Exam?";
  const pollAnswers = [
    { option: "Good", votes: 8 },
    { option: "Bad", votes: 2 },
  ];

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
