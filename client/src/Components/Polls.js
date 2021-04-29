import React, { useState } from "react";
import Poll from "@gidesan/react-polls";

const Polls = () => {
  const pollQuestion = "Is react-polls useful?";
  const pollAnswers = [
    { option: "Yes", votes: 8 },
    { option: "No", votes: 2 },
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
    <div>
      <Poll
        customStyles={{
          questionSeparator: false,
          questionSeparatorWidth: "question",
          questionBold: false,
          questionColor: "#4F70D6",
          align: "center",
          theme: "blue",
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
