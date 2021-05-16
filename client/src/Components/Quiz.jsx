import React, { useState } from "react";
import "../css/quiz.css";
import StudentService from "../Services/StudentService";
import QuizCard from "./QuizCard";

const Quiz = (props) => {
  const { quiz, courseId } = props.location.state;

  const [quizEnded, setQuizEnded] = useState(false);
  const [result, setResult] = useState([]);

  const marks = quiz.questions
    .map((q) => q.marks)
    .reduce((acc, val) => {
      return acc + val;
    }, 0);

  let lmt = quiz.questions.map((q) => {
    return { option: "", marks: 0 };
  });

  let answers = quiz.questions.map((q) => {
    return { answer: q.answer, marks: q.marks };
  });

  const [options, setOptions] = useState([...lmt]);

  const postAnswers = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(options, null, 4));
    let quizMarks = options
      .map((opt) => opt.marks)
      .reduce((acc, val) => {
        return acc + val;
      }, 0);

    // alert(`You got ${quizMarks}/${marks}`);

    StudentService.postQuiz(
      { quizMarks, totalMarks: marks },
      quiz._id,
      courseId
    ).then((data) => {
      console.log(data);
      setResult(data);
      setQuizEnded(true);
    });
  };

  return (
    <div className="overall">
      <div>
        <div className="container-fluid">
          {!quizEnded ? (
            <>
              <h1>{quiz.title}</h1>
              <p>{quiz.description}</p>
              <h5>Total marks allocated : {marks}</h5>
              <div>
                {/* <pre>{JSON.stringify(quiz, null, 2)}</pre> */}
                {quiz.questions.map((q, indx) => (
                  <form onSubmit={postAnswers}>
                    <QuizCard
                      quiz={q}
                      indx={indx}
                      answers={answers}
                      options={options}
                      setOptions={setOptions}
                    />
                    {/* counter=counter+1 */}
                  </form>
                ))}
                <div style={{ textAlign: "center" }}>
                  <button
                    onClick={postAnswers}
                    className="btn btn-success"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h3>
                You Scored: {result.quizMarks}/{marks}
              </h3>
              <button>Go Back To Course</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
