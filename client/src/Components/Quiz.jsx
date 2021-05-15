import React from "react";
import "../css/quiz.css";
import QuizCard from "./QuizCard";

const Quiz = (props) => {
  const id = props.match.params.quizId;

  const { quiz } = props.location.state;

  const marks = quiz.questions
    .map((q) => q.marks)
    .reduce((acc, val) => {
      return acc + val;
    }, 0);

  return (
    <div className="overall">
      <div>
        <input type="hidden" id="myid" defaultValue="topic._id" />
        <div className="container-fluid">
          <h1>{quiz.title}</h1>
          <p>{quiz.description}</p>
          <h5>Total marks allocated : {marks}</h5>
          <div>
            {/* <p>Map starts here</p> */}
            {/* <pre>{JSON.stringify(quiz, null, 2)}</pre> */}
            {quiz.questions.map((q) => (
              <>
                <QuizCard quiz={q} />
                {/* counter=counter+1 */}
                {/* Map ends here */}
              </>
            ))}
            <div style={{ textAlign: "center" }}>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
