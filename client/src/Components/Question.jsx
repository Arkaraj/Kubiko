import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import SenseiService from "../Services/SenseiService";

const Question = ({ quiz, setTotalQuestions }) => {
  const [question, setQuestion] = useState({
    question: "",
    marks: 1,
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  const [done, setDone] = useState(false);

  const onChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  const postQuestion = (e) => {
    e.preventDefault();

    SenseiService.createQuestion(question, quiz._id).then((data) => {
      console.log(data);
      setDone(true);
    });
  };

  const removeQuestion = () => {
    setTotalQuestions((q) => q.pop());
  };

  return (
    <form className="card" id="form" onSubmit={postQuestion}>
      <div className="card-body">
        <div className="wrapper">
          <input
            className="input"
            id="q1"
            name="question"
            value={question.question}
            onChange={onChange}
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
            value={question.option1}
            onChange={onChange}
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
            value={question.option2}
            onChange={onChange}
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
            value={question.option3}
            onChange={onChange}
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
            value={question.option4}
            onChange={onChange}
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
            value={question.answer}
            onChange={onChange}
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
            value={question.marks}
            onChange={onChange}
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
  );
};

export default Question;
