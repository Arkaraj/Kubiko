import React, { useState } from "react";

const QuizCard = ({ quiz }) => {
  const [options, setOptions] = useState([]);

  const onChange = (e) => {};

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div
          className="modal-header"
          style={{ display: "block", padding: "1rem" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h3>{quiz.question}</h3>
            <mark style={{ fontSize: "initial" }}>({quiz.marks} mark)</mark>
          </div>
        </div>
        <div className="modal-body">
          <div className="col-xs-3 col-xs-offset-5">
            <div id="loadbar" style={{ display: "none" }}>
              <div className="blockG" id="rotateG_01" />
              <div className="blockG" id="rotateG_02" />
              <div className="blockG" id="rotateG_03" />
              <div className="blockG" id="rotateG_04" />
              <div className="blockG" id="rotateG_05" />
              <div className="blockG" id="rotateG_06" />
              <div className="blockG" id="rotateG_07" />
              <div className="blockG" id="rotateG_08" />
            </div>
          </div>
          <div className="quiz" id="quiz" data-toggle="buttons">
            <label
              id="counter"
              className="element-animation1 btn btn-lg btn-primary btn-block"
            >
              <span className="btn-label">
                <i className="glyphicon glyphicon-chevron-right" />
              </span>
              <input type="radio" name="qcounter" defaultValue={1} />
              {quiz.option1}
            </label>
            <label
              id="b2counter"
              className="element-animation2 btn btn-lg btn-primary btn-block"
            >
              <span className="btn-label">
                <i className="glyphicon glyphicon-chevron-right" />
              </span>
              <input type="radio" name="qcounter" defaultValue={2} />
              {quiz.option2}
            </label>
            <label
              id="b3counter"
              className="element-animation3 btn btn-lg btn-primary btn-block"
            >
              <span className="btn-label">
                <i className="glyphicon glyphicon-chevron-right" />
              </span>
              <input type="radio" name="qcounter" defaultValue={3} />
              {quiz.option3}
            </label>
            <label
              id="b4counter"
              className="element-animation4 btn btn-lg btn-primary btn-block"
            >
              <span className="btn-label">
                <i className="glyphicon glyphicon-chevron-right" />
              </span>
              <input type="radio" name="qcounter" defaultValue={4} />
              {quiz.option4}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
