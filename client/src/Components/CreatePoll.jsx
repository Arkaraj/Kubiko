import React, { useState, useRef } from "react";
import SenseiService from "../Services/SenseiService";
import StudentService from "../Services/StudentService";

const CreatePoll = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    {
      text: "",
    },
    {
      text: "",
    },
  ]);
  const [pollCreated, setPollCreated] = useState(false);

  const inputRef = useRef(null);

  const handleOptionInput = (e, i) => {
    e.preventDefault();
    let newOptions = JSON.parse(JSON.stringify(options));
    newOptions[i].text = e.target.value;
    setOptions(newOptions);
    inputRef.current.focus();
  };

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };
  const addInputs = () => {
    let newOptions = JSON.parse(JSON.stringify(options));
    newOptions.push({ text: "" });
    setOptions([...newOptions]);
  };

  const removeInputs = () => {
    let newOptions = JSON.parse(JSON.stringify(options));
    newOptions.pop();
    setOptions([...newOptions]);
  };

  const postPoll = (e) => {
    e.preventDefault();

    let poll = {
      title,
      question,
    };
    alert(JSON.stringify(poll, null, 4));
    setPollCreated(true);
    // StudentService
  };

  const submitPoll = (e) => {
    e.preventDefault();
  };

  const AddPoll = () => (
    <>
      {options.map((input, i) => {
        return (
          <div className="form-group">
            <label htmlFor={"Input" + (i + 1)}>{"Poll Item " + (i + 1)}</label>
            <input
              ref={inputRef}
              key={i}
              className="form-control input-lg"
              id={"Input" + (i + 1)}
              type="text"
              name="text"
              value={options[i].text}
              onChange={(e) => handleOptionInput(e, i)}
              placeholder={"Poll Item " + (i + 1)}
            />
          </div>
        );
      })}
    </>
  );

  return (
    <div className="container well">
      <h3 className="text-center">Create New Poll</h3>
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control input-lg"
          value={title}
          placeholder="Title"
          onChange={handleTitleInput}
        />
        <label htmlFor="title">Question</label>
        <input
          type="text"
          className="form-control input-lg"
          value={question}
          placeholder="Question"
          onChange={(e) => setQuestion(e.target.value)}
        />
        {pollCreated ? (
          <AddPoll />
        ) : (
          <input
            type="button"
            className="btn btn-success pull-right"
            value="Create Poll"
            onClick={postPoll}
          />
        )}
        <label>{"Adjust Number of Options"}</label>
        <br />
        {pollCreated ? (
          <>
            <input
              type="button"
              className="btn btn-primary"
              value="+"
              onClick={addInputs}
            />
            <input
              type="button"
              className="btn btn-danger"
              value="-"
              onClick={removeInputs}
            />
            <input
              type="button"
              className="btn btn-success pull-right"
              value="Submit Poll"
              onClick={submitPoll}
            />
          </>
        ) : null}
      </form>
    </div>
  );
};

export default CreatePoll;
