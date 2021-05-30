import React, { useRef } from "react";
import { MdChromeReaderMode } from "react-icons/md";

const QuizCard = ({ quiz, indx, options, setOptions, answers }) => {
  const synthRef = useRef(window.speechSynthesis);

  const onChange = (e) => {
    let newOptions = JSON.parse(JSON.stringify(options));
    newOptions[indx].option = e.target.value;
    if (e.target.value === answers[indx].answer) {
      newOptions[indx].marks += answers[indx].marks;
      setOptions(newOptions);
    } else {
      newOptions[indx].marks = 0;
      setOptions(newOptions);
    }
  };

  // Using function instead of const thing for a change
  function textToSpeech() {
    const text = `Question: ${quiz.question}, option 1: ${quiz.option1}, option 2: ${quiz.option2},option 3: ${quiz.option3},option 4: ${quiz.option4}, marks for the question: ${quiz.marks}`;

    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.7;
    utter.pitch = 1;
    // utter.lang = ""; // zh-cn, es-es, de-de
    synthRef.current.speak(utter);
  }

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <button
          onClick={textToSpeech}
          style={{
            width: "fitContent",
            marginLeft: "auto",
            marginRight: "1rem",
          }}
        >
          <h6>
            <MdChromeReaderMode style={{ width: "1.2rem", height: "1.2rem" }} />
          </h6>
        </button>
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
          <div className="col-xs-3 col-xs-offset-5"></div>
          <div className="quiz" id="quiz" data-toggle="buttons">
            <label
              id="counter"
              className="element-animation1 btn btn-lg btn-primary btn-block"
            >
              <span className="btn-label">
                <i className="glyphicon glyphicon-chevron-right" />
              </span>
              <input
                type="radio"
                onChange={onChange}
                name="quiz"
                value={quiz.option1}
              />
              {quiz.option1}
            </label>
            <label
              id="b2counter"
              className="element-animation2 btn btn-lg btn-primary btn-block"
            >
              <span className="btn-label">
                <i className="glyphicon glyphicon-chevron-right" />
              </span>
              <input
                type="radio"
                onChange={onChange}
                name="quiz"
                value={quiz.option2}
              />
              {quiz.option2}
            </label>
            <label
              id="b3counter"
              className="element-animation3 btn btn-lg btn-primary btn-block"
            >
              <span className="btn-label">
                <i className="glyphicon glyphicon-chevron-right" />
              </span>
              <input
                type="radio"
                onChange={onChange}
                name="quiz"
                value={quiz.option3}
              />
              {quiz.option3}
            </label>
            <label
              id="b4counter"
              className="element-animation4 btn btn-lg btn-primary btn-block"
            >
              <span className="btn-label">
                <i className="glyphicon glyphicon-chevron-right" />
              </span>
              <input
                type="radio"
                onChange={onChange}
                name="quiz"
                value={quiz.option4}
              />
              {quiz.option4}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
