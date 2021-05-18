import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SenseiService from "../Services/SenseiService";

const EditPoll = (props) => {
  const id = props.match.params.pollId;

  const [poll, setPoll] = useState(null);

  useEffect(() => {
    SenseiService.GetPoll(id).then((data) => {
      setPoll(data.poll);
    });
  }, [id]);

  //   const { title, description, questions } = quiz;
  const freezePoll = (e) => {
    e.preventDefault();
    SenseiService.updatePoll(poll._id).then((data) => {
      console.log(data);
      props.history.goBack();
    });
  };

  return (
    <div style={{ margin: "1rem" }}>
      <Link onClick={props.history.goBack}>
        <button>← Go Back</button>
      </Link>
      {poll ? (
        <>
          <div className="d-flex justify-content-between">
            <h2>Poll: {poll.title}</h2>
            <button className="btn btn-primary" onClick={freezePoll}>
              {" "}
              Close Quiz{" "}
            </button>
          </div>
          <h4>Question: {poll.question}</h4>
          <h4>
            <u>Options:</u>
          </h4>
          {poll.options.map((opt) => (
            <h4>{opt.option}</h4>
          ))}
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default EditPoll;
