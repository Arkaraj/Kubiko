import React, { useState } from "react";
import Poll from "@gidesan/react-polls";
import StudentService from "../Services/StudentService";

const Polls = (props) => {
  // const id = props.match.params.pollId;

  const { poll } = props.location.state;

  const pollQuestion = poll.question;

  const pollAnswers = poll.options.map((opt) => {
    return { _id: opt._id, option: opt.option, votes: opt.clicked };
  });

  const [pollAnswer, setPollAnswer] = useState([...pollAnswers]);
  const [result, setResult] = useState(null);

  const handleVote = (voteAnswer) => {
    // const newPollAnswers = pollAnswer.map((answer) => {
    //   if (answer.option === voteAnswer) answer.votes++;
    //   return answer;
    // });

    setPollAnswer([...pollAnswers]);

    let pollResult = pollAnswers
      // eslint-disable-next-line array-callback-return
      .map((ans) => {
        if (ans.option === voteAnswer) {
          return ans._id;
        } else {
        }
      })
      .filter((x) => x)[0];
    StudentService.submitPoll(pollResult).then((data) => {
      console.log(data);
      setResult(voteAnswer);
    });

    // setPollAnswer([...newPollAnswers]);
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
