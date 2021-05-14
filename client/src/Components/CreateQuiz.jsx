/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../css/createQuiz.css";
import SenseiService from "../Services/SenseiService";
import Question from "./Question";

const CreateQuiz = (props) => {
  const id = props.match.params.courseId;

  const [quiz, setQuiz] = useState({ title: "", description: "" });
  const [quizInfo, setQuizInfo] = useState(null);
  const [quizCreated, setQuizCreated] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState([1]);

  const onChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const postQuiz = (e) => {
    e.preventDefault();
    setQuizCreated(true);
    SenseiService.createQuiz(quiz, id).then((data) => {
      console.log(data);
      setQuizInfo(data.quiz);
      setQuizCreated(true);
    });
  };

  const addNewQuestion = (e) => {
    // Append random no
    e.preventDefault();
    setTotalQuestions((q) => [
      ...q,
      Math.random().toString(36).substring(2, 7),
    ]);
  };

  return (
    <div style={{ textAlign: "center", background: "#ced4da", height: "100%" }}>
      <div className="page-border border-left" />
      <div className="page-border border-right" />
      <div className="page-border border-top" />
      <div className="page-border border-bottom" />
      <input type="hidden" id="myid" defaultValue="hi" />
      <form id="form" onSubmit={postQuiz}>
        <div
          className="container"
          id="dynamicInput"
          style={{ marginBottom: "16px" }}
        >
          <h3 style={{ paddingTop: "0px", marginBottom: "20px" }}>
            Create Quiz
          </h3>
          <div className="wrapper">
            <input
              className="input"
              id="title"
              name="title"
              value={quiz.title}
              onChange={onChange}
              placeholder="Untitled Quiz*"
              type="text"
              required
            />
            <span className="underlinex" />
          </div>
          <div className="wrapper">
            <input
              className="input"
              name="description"
              value={quiz.description}
              placeholder="Description* (required)"
              type="text"
              onChange={onChange}
              style={{ fontSize: "12px" }}
            />
            <span className="underlinex" />
          </div>
        </div>
        <button
          type="submit"
          disabled={quizCreated}
          className="btn-get-started"
        >
          Create Quiz
        </button>
      </form>
      <div className="card-footer" align="right">
        <button
          data-toggle="tooltip"
          data-placement="bottom"
          title="Add question"
          id="addCard"
          className="btn btn-success d-flex align-center"
          onClick={addNewQuestion}
        >
          Add Questions
          <i className="fa fa-plus-circle fa-2x" />
        </button>
      </div>
      {quizCreated ? (
        <>
          <h3>Questions: </h3>
          {totalQuestions.map((ques) => (
            <Question
              key={Math.random()}
              setTotalQuestions={setTotalQuestions}
              quiz={quizInfo}
            />
          ))}
        </>
      ) : null}

      <sub>Kubiko</sub>
    </div>
  );
};

export default CreateQuiz;
