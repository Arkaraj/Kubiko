/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../css/createQuiz.css";
import SenseiService from "../Services/SenseiService";
import { BsCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const CreateQuiz = (props) => {
  const id = props.match.params.courseId;

  const [quiz, setQuiz] = useState({ title: "", description: "" });
  const [quizInfo, setQuizInfo] = useState(null);
  const [quizCreated, setQuizCreated] = useState(false);
  const [questions, setQuestions] = useState([
    {
      question: "",
      marks: 1,
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    },
  ]);
  const [done, setDone] = useState(false);

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

  const postQuestion = (e, question) => {
    e.preventDefault();
    SenseiService.createQuestion(question, quizInfo._id).then((data) => {
      console.log(data);
      setDone(false);
      alert("Question pushed");
    });
  };

  const addNewQuestion = (e) => {
    // Append random no
    e.preventDefault();
    let newOptions = JSON.parse(JSON.stringify(questions));
    newOptions.push({
      question: "",
      marks: 1,
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    });
    // setQuestions((q) => [...q, Math.random().toString(36).substring(2, 7)]);
    setQuestions([...newOptions]);
  };

  const onChangeQuestion = (e, indx) => {
    // e.preventDefault();
    let newOptions = JSON.parse(JSON.stringify(questions));
    newOptions[indx][e.target.name] = e.target.value;
    setQuestions([...newOptions]);
  };

  const removeQuestion = () => {
    let newOptions = JSON.parse(JSON.stringify(questions));
    newOptions.pop();
    setQuestions([...newOptions]);
  };

  const QuestionJSX = () => (
    <>
      {questions.map((question, indx) => (
        <form
          className="card"
          id="form"
          onSubmit={(e) => postQuestion(e, question)}
        >
          <div className="card-body">
            <div className="wrapper">
              <input
                className="input"
                id="q1"
                name="question"
                value={questions[indx].question}
                onChange={(e) => onChangeQuestion(e, indx)}
                placeholder="Untitled Question*"
                type="text"
                style={{ fontSize: "18px" }}
                required
              />
              <span className="underlinex" />
            </div>
            <label className="input-container" style={{ width: "100%" }}>
              <BsCircle className="icon" />
              <input
                type="text"
                id="q1opt1"
                name="option1"
                value={questions[indx].option1}
                onChange={(e) => onChangeQuestion(e, indx)}
                className="form-control"
                placeholder="Option 1"
                required
              />
            </label>
            <label className="input-container" style={{ width: "100%" }}>
              <BsCircle className="icon" />
              <input
                type="text"
                id="q1opt2"
                name="option2"
                value={questions[indx].option2}
                onChange={(e) => onChangeQuestion(e, indx)}
                className="form-control"
                placeholder="Option 2"
                required
              />
            </label>
            <label className="input-container" style={{ width: "100%" }}>
              <BsCircle className="icon" />
              <input
                type="text"
                id="q1opt3"
                name="option3"
                value={questions[indx].option3}
                onChange={(e) => onChangeQuestion(e, indx)}
                className="form-control"
                placeholder="Option 3"
                required
              />
            </label>
            <label className="input-container" style={{ width: "100%" }}>
              <BsCircle className="icon" />
              <input
                type="text"
                id="q1opt4"
                name="option4"
                value={questions[indx].option4}
                onChange={(e) => onChangeQuestion(e, indx)}
                className="form-control"
                placeholder="Option 4"
                required
              />
            </label>
            <label className="input-container" style={{ width: "100%" }}>
              <i className="fa fa-check-circle icon" />
              <input
                type="text"
                id="q1ans"
                name="answer"
                value={questions[indx].answer}
                onChange={(e) => onChangeQuestion(e, indx)}
                className="form-control"
                placeholder="Answer"
                required
              />
            </label>
            <label className="input-container" style={{ width: "100%" }}>
              <i className="fa fa-check-circle icon" />
              <input
                type="number"
                // id="q1ans"
                min="1"
                name="marks"
                value={questions[indx].marks}
                onChange={(e) => onChangeQuestion(e, indx)}
                className="form-control"
                placeholder="Marks"
                required
              />
            </label>
          </div>
          <div className="card-footer" align="right">
            <span
              data-toggle="tooltip"
              data-placement="bottom"
              title="Delete question"
              onClick={removeQuestion}
            >
              <i className="fa fa-trash fa-2x trashx" />
            </span>
          </div>
          <button
            name="submit_btn"
            value="primary"
            type="submit"
            className="btn-get-started"
            disabled={done}
          >
            DONE
          </button>
        </form>
      ))}
    </>
  );

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
          <QuestionJSX />
          <Link onClick={props.history.goBack}>
            <button className="btn-get-started">Done</button>
          </Link>
        </>
      ) : null}

      <sub>Kubiko</sub>
    </div>
  );
};

export default CreateQuiz;
